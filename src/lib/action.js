"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

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
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (formData) => {
  const { socialname, email, password, img, passwordRepeat } = Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return "Passwords do not match";
  }

  try {
    connectToDb();
    const user = await User.findOne({ socialname });
    if (user) {
      return "User already registered";
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hashPassword(password, salt);

    const newUser = new User({
      socialname,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
  } catch (err) {
    console.log(err);
    return { err: "Something went wrong" };
  }
};

export const login = async (formData) => {
  const { socialname, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { socialname, password });
  } catch (err) {
    console.log(err);
    return { err: "Something went wrong" };
  }
};
