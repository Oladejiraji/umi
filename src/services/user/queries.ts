import { useMutation, useQuery } from "@tanstack/react-query";
import keys from "./keys";
import api from "../api";
import { TInfo } from "@/schema/auth/infoSchema";
import { GenericResponse } from "../generalTypes";
import { errorToast } from "@/utils/helper";
import { handleErrors } from "../helper";
import { useRouter } from "next/navigation";
import { AppRoutes } from "@/utils/routes";

const BASE_URL = "/user";
export const useUserRead = () => {
  const hash = [keys.read];
  const { data, isLoading, isPending, error } = useQuery<any>({
    queryKey: hash,
    queryFn: async () => await api.get({ url: BASE_URL, auth: true }),
  });
  return {
    data,
    isLoading,
    isPending,
    error,
  };
};

export const useUpdateUserInfo = () => {
  const router = useRouter();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (body: TInfo): Promise<any> => {
      return await api.patch({ url: BASE_URL, body });
    },
    onSuccess: () => {
      //   successToast(data.message);
      router.push(AppRoutes.dashboard.home.path);
    },
    onError: (data: GenericResponse) => {
      errorToast(handleErrors(data));
    },
  });
  return {
    mutate,
    isPending,
    isError,
  };
};
