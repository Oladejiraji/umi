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
