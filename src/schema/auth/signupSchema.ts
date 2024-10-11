import * as Yup from "yup";
import { ErrorMessages } from "@/constants/errors";

export const signupSchema = Yup.object().shape({
  email: Yup.string()
    .required(ErrorMessages.required("Email"))
    .email(ErrorMessages.invalidEmail),
  password: Yup.string()
    .required(ErrorMessages.required("Password"))
    .min(8, ErrorMessages.length(8, "Password"))
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/^\S*$/, "Password must not contain spaces"),
});

export type TSignup = Yup.InferType<typeof signupSchema>;
