// Create hook to fetch posts from API

import { useQuery } from "react-query";
import { HttpAPI } from "presentation/api";
import { PostUseCase } from "domain/usecase";

export const usePosts = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery<PostUseCase.Model>(
    "/posts",
    async () => {
      const { data } = await HttpAPI.get<PostUseCase.Model>("/post");
      return data;
    },
    {
      staleTime: 1000 * 60 * 10,
    }
  );

  return { posts, isLoading, error };
};
