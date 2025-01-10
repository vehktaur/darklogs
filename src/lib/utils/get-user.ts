'use cache';

import { connectDB } from '../config/db';
import Users, { User } from '../models/users';
import { unstable_cacheTag as cacheTag } from 'next/cache';

export const getUser = async (query: {
  email?: string;
  id?: string;
  username?: string;
}) => {
  const { email, id, username } = query;

  cacheTag('user');

  try {
    //Connect to the DB
    await connectDB();

    let user: User | null = null;

    if (email) {
      user = await Users.findOne({ email: email.toLowerCase() }).lean<User>({
        virtuals: true,
      });
    } else if (id) {
      user = await Users.findById(id).lean<User>({
        virtuals: true,
      });
    } else if (username) {
      user = await Users.findOne({
        username: username.toLowerCase(),
      }).lean<User>({
        virtuals: true,
      });
    }

    if (user) {
      user._id = user._id.toString();
    }
    return user;
  } catch (error) {
    console.error(error);
  }
};
