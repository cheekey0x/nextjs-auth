"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  console.log(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please enter a valid email address, password, and name",
    };
  }

  return { success: true, message: "Registration successful" };
};
