"use server";

import { signOut } from "@/auth";
import prisma from "@/lib/prisma";

export const logOut = async () => {
  await signOut({ redirectTo: "/" });
};

export const getUserInfo = async (userId) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        image: true,
        role: true,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};
