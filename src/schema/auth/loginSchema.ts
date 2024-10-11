import * as Yup from "yup";
import { ErrorMessages } from "@/constants/errors";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required(ErrorMessages.required("Email"))
    .email(ErrorMessages.invalidEmail),
  password: Yup.string().required(ErrorMessages.required("Password")),
});

export type TLogin = Yup.InferType<typeof loginSchema>;
