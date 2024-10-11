import * as Yup from "yup";
import { ErrorMessages } from "@/constants/errors";

export const infoSchema = Yup.object().shape({
  full_name: Yup.string().required(ErrorMessages.required("Full name")),
  profession: Yup.string().required(ErrorMessages.required("Profession")),
  use_app_for: Yup.string().required(ErrorMessages.required("App use")),
});

export type TInfo = Yup.InferType<typeof infoSchema>;
