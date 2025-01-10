'use server';

import { connectDB } from '@/lib/config/db';
import { Password } from '@/lib/definitions';
import { backendClient } from '@/lib/edgestore-server';
import Users, { User } from '@/lib/models/users';
import { getUser } from '@/lib/utils/get-user';
import bcrypt from 'bcryptjs';
import { revalidateTag } from 'next/cache';

// Dynamically import auth to avoid circular dependency issues
// resulting from createUser being imported into auth files
const getAuth = async () => {
  const { auth } = await import('@/auth');
  return auth();
};

export const createUser = async (user: Partial<User>) => {
  try {
    //Connect to the DB
    await connectDB();

    //Check whether user already exists
    const userExists = await getUser({ email: user.email });
    if (userExists) {
      throw new Error('Email already in use');
    }

    // Hash password and create user
    if (user.password) user.password = await bcrypt.hash(user.password, 10);
    await Users.create(user);

    // Return new user and success msg
    const newUser = await getUser({ email: user.email });

    revalidateTag('user');
    return {
      success: true,
      msg: 'User created',
      user: newUser,
    };
  } catch (error) {
    return {
      success: false,
      msg: error instanceof Error ? error.message : 'An error occurred',
    };
  }
};

export const updateUser = async (updatedData: Partial<User>) => {
  try {
    //Connect to DB
    await connectDB();

    // Get user details
    const session = await getAuth();
    if (!session) {
      throw new Error('User must be logged in');
    }

    //Get the user TBU from to the DB
    const user = await Users.findById(session.user._id);

    //Confirm user exists
    if (!user) {
      throw new Error('User does not exist');
    }

    //Update the blog with the values from the updatedData
    Object.assign(user, updatedData);
    await user.save();

    revalidateTag('user');

    //return success msg
    return {
      success: true,
      msg: 'User Updated',
    };
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return {
      success: false,
      msg: error instanceof Error ? error.message : 'Something went wrong',
    };
  }
};

export const changePassword = async (data: Password) => {
  try {
    // Connect to the DB
    await connectDB();

    // Get user details
    const session = await getAuth();
    if (!session) {
      throw new Error('User must be logged in');
    }

    //Confirm user exists
    const user = await Users.findById(session.user._id);
    if (!user) {
      throw new Error('User does not exist');
    }

    //Confirm user has an existing password
    if (!user.password) {
      throw new Error('No password credentials found');
    }

    // Confirm the old password matches DB password
    const passwordsMatch = await bcrypt.compare(data.password, user.password);
    if (!passwordsMatch) {
      throw new Error('Invalid credentials');
    }

    // Confirm new password was submitted
    if (data.newPassword) {
      data.newPassword = await bcrypt.hash(data.newPassword, 10);
    } else {
      throw new Error('New password required');
    }

    // Save new password in the DB
    user.password = data.newPassword;
    await user.save();

    revalidateTag('user');

    return {
      success: true,
      msg: 'Password changed',
    };
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return {
      success: false,
      msg: error instanceof Error ? error.message : 'Something went wrong',
    };
  }
};

export const changeProfilePic = async (url: string) => {
  try {
    // connect to the DB
    await connectDB();

    // Get user details
    const session = await getAuth();
    if (!session) {
      throw new Error('User must be logged in');
    }

    // Confirm user exists
    const user = await Users.findById(session.user._id);
    if (!user) {
      throw new Error('User does not exist');
    }

    // Confirm new image upload
    await backendClient.userImages.confirmUpload({ url });
    // Delete old image from edgestore
    if (user.image)
      await backendClient.userImages.deleteFile({ url: user.image });

    // Add new image to DB
    user.image = url;
    await user.save();

    revalidateTag('user');

    return {
      success: true,
      msg: 'Profile pic updated',
    };
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return {
      success: false,
      msg: error instanceof Error ? error.message : 'Something went wrong',
    };
  }
};

export const deleteProfilePic = async (url?: string | null) => {
  try {
    // connect to the DB
    await connectDB();

    // Get user details
    const session = await getAuth();
    if (!session) {
      throw new Error('User must be logged in');
    }

    // Confirm user exists
    const user = await Users.findById(session.user._id);
    if (!user) {
      throw new Error('User does not exist');
    }

    // Delete picture from edgestore
    if (url) await backendClient.userImages.deleteFile({ url });
    // Delete old image from edgestore
    if (user.image)
      await backendClient.userImages.deleteFile({ url: user.image });

    // Remove image from the user profile
    user.image = undefined;
    await user.save();

    revalidateTag('user');

    return {
      success: true,
      msg: 'Profile pic deleted',
    };
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return {
      success: false,
      msg: error instanceof Error ? error.message : 'Something went wrong',
    };
  }
};
