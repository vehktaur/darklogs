import 'server-only';
import { ConnectDB } from './config/db';
import Blogs, { PopulatedBlog } from './models/blogs';
import { unstable_cache } from 'next/cache';
import Users from './models/users';

//Get All Blogs from the Database
export const getAllBlogs = async () => {
  try {
    // Connect to MongoDB
    await ConnectDB();

    // Fetch blogs based on the provided query
    const blogs = await Blogs.find()
      .populate({ path: 'author', model: Users })
      .lean<PopulatedBlog[]>();
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
};

export const getBlog = async (id: string) => {
  try {
    // Connect to MongoDB
    await ConnectDB();

    // Fetch blogs based on the provided query
    const blog = await Blogs.findById(id)
      .populate({ path: 'author', model: Users })
      .lean<PopulatedBlog>();

    return blog;
  } catch (error) {
    console.error('Error fetching blog:', error);
  }
};

export const getCachedBlogs = unstable_cache(
  async () => await getAllBlogs(),
  ['blogs'],
  {
    tags: ['blogs'],
  },
);
