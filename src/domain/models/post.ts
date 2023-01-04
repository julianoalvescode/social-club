export type Post = {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: string;
  publishedAt: string;
  comments: Comment[];
};

export type Comment = {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: string;
  publishedAt: string;
};
