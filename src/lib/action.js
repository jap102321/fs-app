'use server';

import { revalidatePath } from 'next/cache';
import { Post, User } from './models';
import { connectToDb } from './utils';
import { signIn, signOut } from './auth';
import bcrypt from 'bcryptjs';

export const addPost = async (prevState, formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log('Saved to DB');
    revalidatePath('/blog');
    revalidatePath('/admin');
  } catch (e) {
    console.log(e);
    return { error: 'Something went wrong!' };
  }
};

export const deletePost = async (formData) => {
  'use server';
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath('/blog');
    revalidatePath('/admin');
  } catch (e) {
    console.log(e);
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    revalidatePath('/admin');
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = async (formData) => {
  'use server';
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    revalidatePath('/admin');
  } catch (e) {
    console.log(e);
  }
};

export const handleGithubLogin = async () => {
  'use server';
  await signIn('github');
};

export const handleSignOut = async () => {
  'use server';
  await signOut();
};

export const registerUser = async (previousState, formData) => {
  const { username, email, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: 'Username already exists.' };
  }

  try {
    connectToDb();

    const userExists = await User.findOne({ username });

    if (userExists) {
      return { error: 'Username already exists.' };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return { success: true };
  } catch (e) {
    console.log(e);
    return { error: 'Something went wrong.' };
  }
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn('credentials', { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes('CredentialsSignin')) {
      return { error: 'Invalid username or password' };
    }
    throw err;
  }
};
