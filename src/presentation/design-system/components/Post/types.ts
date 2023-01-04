import { Comment } from "domain/models";

export type Post = {
  title?: string;
  author?: string;
  authorImage?: string;
  content?: string;
  role?: string;
  creadtedAt?: string;
  comments: Comment[];
};
