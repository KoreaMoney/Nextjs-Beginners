"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./utils";
import { Post } from "./models";
import { signIn, signOut } from "./auth";

export const addPost = async (formData) => {
  /**
   * Object.entries(obj) : 객체 ==> 배열
   * Object.fromEntries(arr) : 배열 ==> 객체
   */
  const { title, desc, minidesc, slug, link, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({ title, desc, minidesc, slug, link, userId });
    await newPost.save();
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return { err: "Something went wrong" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return { err: "Something went wrong" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};
