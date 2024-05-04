"use server";

import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";

export const admin = async () => {
  const role = await currentRole();

  if (role === UserRole.ADMIN) {
    return { success: true, message: "You are an admin!" };
  }

  return { success: false, message: "You are not an admin!" };
};
