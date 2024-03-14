import { Post, User } from './models';
import { connectToDb } from './utils';

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log('err', err);
    throw new Error('Posts not found');
  }
};
export const getPost = async (slug) => {
  try {
    connectToDb();
    const posts = await Post.findOne({ slug });
    return posts;
  } catch (err) {
    console.log('err', err);
    throw new Error('Posts not found');
  }
};

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log('err', err);
    throw new Error('User not found');
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log('err', err);
    throw new Error('Failed user fetch');
  }
};
