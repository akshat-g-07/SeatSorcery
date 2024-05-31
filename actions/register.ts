"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function register(values: RegisterFormData) {
  const { name, email, password } = values;
  if (!name) {
    return { error: "Name is required!" };
  }

  if (!email) {
    return { error: "Email is required!" };
  }

  if (!password) {
    return { error: "Password is required!" };
  }

  if (password.length < 8) {
    return { error: "Password length should be at least 8!" };
  }

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already exists!" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "User Created!" };
}
