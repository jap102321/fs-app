import { Post } from '@/lib/models';
import { connectToDb } from '@/lib/utils';
import { NextResponse } from 'next/server';

export const GET = async (req, res) => {
  try {
    connectToDb();

    const posts = await Post.find();

    return NextResponse.json(posts);
  } catch (e) {
    console.error(e);
    throw new Error('Failed to find posts!');
  }
};
