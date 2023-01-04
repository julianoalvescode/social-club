export type Post = {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: string;
  publishedAt: string;
};
