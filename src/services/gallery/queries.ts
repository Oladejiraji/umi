import { createClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { Database } from "@/database/gallery";

interface User {
  created_at: string;
  description: string;
  id: number;
  name: string;
}

const client = createClient<Database>();

function useGetGallery() {
  const { data, isPending, error } = useQuery({
    queryKey: ["gallery"],
    queryFn: async (): Promise<User[]> => {
      const gallery = await client.from("gallery").select("*").throwOnError();
      return gallery.data || [];
    },
  });

  return { data, isPending, error };
}

export { useGetGallery };
