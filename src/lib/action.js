'use server';

import { revalidatePath } from 'next/cache';
import { Post } from './models';
import { connectToDb } from './utils';

export const addPost = async (formData) => {
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
  } catch (e) {
    console.log(e);
  }
};

export const deletePost = async (formData) => {
  'use server';
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log('Deleted from DB');
    revalidatePath('/blog');
  } catch (e) {
    console.log(e);
  }
};
