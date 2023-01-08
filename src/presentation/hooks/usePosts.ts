// Create hook to fetch posts from API

import { useMutation, useQuery } from "react-query";
import { HttpAPI } from "presentation/api";
import { PostUseCase } from "domain/usecase";

export const usePosts = () => {
  const mutation = useMutation(async (post: Partial<PostUseCase.Model>) => {
    return await HttpAPI.post("/post", post);
  });

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

  const sendPost = (post: Partial<PostUseCase.Model>) => mutation.mutate(post);

  return { posts, isLoading, error, sendPost };
};
