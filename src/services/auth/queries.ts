import { createClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { User } from "@supabase/supabase-js";
import { AuthRequest } from "@/types/generalTypes";

const client = createClient();

function useGetUsers() {
  const { data, isPending, error } = useQuery({
    queryKey: ["users"],
    queryFn: async (): Promise<User | null> => {
      const user = await client.auth.getUser();
      return user.data.user;
    },
  });

  return { data, isPending, error };
}

export const signUp = async ({ email, password }: AuthRequest) => {
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    // options: {
    //   emailRedirectTo: `${origin}/auth/callback`,
    // },
  });

  if (error) {
    throw new Error(error.message);
  }
};

export const signIn = async ({ email, password }: AuthRequest) => {
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
};

export const signOut = async () => {
  try {
    const supabase = createClient();
    await supabase.auth.signOut();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { useGetUsers };
