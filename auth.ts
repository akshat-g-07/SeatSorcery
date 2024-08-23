import { auth } from "@/auth";

export const currentUser = async () => {
  return session?.user;
};
