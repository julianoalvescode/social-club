import { HttpAPI } from "presentation/api";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";

export function useComment() {
  const mutation = useMutation(async (comment: string) => {
    return HttpAPI.post("/comment", comment);
  }, {});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendComment = (comment: string) => mutation.mutate(comment);

  return {
    sendComment,
    form: {
      register,
      handleSubmit,
      errors,
    },
  };
}
