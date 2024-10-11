import { FormikErrors, FormikTouched } from "formik";
import { toast } from "react-toastify";

export const successToast = (message: string) => {
  toast.success(message || "Successful!");
};

export const errorToast = (message: string) => {
  toast.error(message || "Something went wrong!");
};

export const defaultToast = (message: string) => {
  toast(message || "Successful!");
};

export function convertBoxLength(
  targetLength = 72,
  originalLength = 72,
  originalScaledLength = 0.75,
): number {
  const scaleFactor = originalScaledLength / originalLength;
  return targetLength * scaleFactor;
}

export const checkErrorManually = <T>(
  errors: FormikErrors<T>,
  touched: FormikTouched<T>,
  value: T,
  name: keyof T,
) => {
  return (errors[name] && touched[name]) || false || !value[name];
};
