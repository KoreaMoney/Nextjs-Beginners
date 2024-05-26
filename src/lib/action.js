"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (prevState, formData) => {
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
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const addUser = async (prevState, formData) => {
  const { socialname, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      socialname,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
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

export const register = async (previousState, formData) => {
  const { socialname, email, password, img, passwordRepeat } = Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();
    const user = await User.findOne({ socialname });
    if (user) {
      return { error: "User already registered" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      socialname,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const login = async (previousState, formData) => {
  const { socialname, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { socialname, password });
  } catch (error) {
    console.log(error);
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid name or password" };
    }
    throw error;
  }
};
