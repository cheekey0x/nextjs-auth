import { newPassword } from "@/actions/new-password";
import { UserRole } from "@prisma/client";
import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(1, {
    message: "Please enter a password",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
  name: z.string().min(1, {
    message: "Please enter your name",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export const SettingsSchema = z
  .object({
    name: z.optional(
      z.string().min(1, {
        message: "Please enter your name",
      })
    ),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(
      z.string().email({ message: "Please enter a valid email" })
    ),
    password: z.optional(
      z.string().min(6, { message: "Password must be at least 6 characters" })
    ),
    newPassword: z.optional(
      z.string().min(6, { message: "Password must be at least 6 characters" })
    ),
  })
  .refine(
    (data) => {
      if (data.password && data.newPassword) {
        return data.password !== data.newPassword;
      }
      return true;
    },
    {
      message: "New password must be different from the current password",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
      return true;
    },
    {
      message: "New password is required",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    {
      message: "Password is required",
      path: ["password"],
    }
  );
