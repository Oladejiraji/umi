import { ErrorMessages } from "@/constants/errors";
import { z } from "zod";

export const signupSchema = z.object({
  email: z
    .string({
      required_error: ErrorMessages.required("Email"),
    })
    .min(1, {})
    .email({ message: ErrorMessages.invalidEmail }),
  password: z
    .string({ required_error: ErrorMessages.required("Password") })
    .min(8, { message: ErrorMessages.length(8, "Password") })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/^\S*$/, { message: "Password must not contain spaces" }),
});

export type TSignup = z.infer<typeof signupSchema>;
