import axiosInstance from "./axiosConfig";
import { GenericResponse } from "./generalTypes";

export const saveLocalStorage = (data: any, key: string) => {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getLocalStorage = (key: string) => {
  try {
    const jsonData = localStorage.getItem(key);
    if (!jsonData) return null;
    return JSON.parse(jsonData);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const clearLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
    return null;
  }
  return null;
};

export const getQueryKeys = (namespace: string) => ({
  create: `${namespace}/create`,
  createOne: `${namespace}/createOne`,
  read: `${namespace}/read`,
  readOne: `${namespace}/readOne`,
  update: `${namespace}/update`,
  patch: `${namespace}/patch`,
  put: `${namespace}/put`,
  delete: `${namespace}/delete`,
});

export function handleErrors(err: GenericResponse) {
  const { response, message } = err;
  const data = response?.data;

  if (!data) return message;

  const errorMessage: string = data?.message || "Something went wrong";

  return errorMessage;
}

export function hasTokenExpired(isoTimestamp: string): boolean {
  const currentDateTime = new Date();
  const expirationDateTime = new Date(isoTimestamp);

  // Compare the current date/time to the expiration date/time
  return currentDateTime >= expirationDateTime;
}

export interface IUpload {
  message: string;
  status: string;
  status_code: number;
  payload: string;
}

export async function uploadFile(body: any): Promise<IUpload> {
  const res = await axiosInstance.post(`/uploads/admins`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
      "X-Request-Source": "med-connect",
    },
  });

  return res.data;
}
