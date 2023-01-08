import { Header, Post, Sidebar } from "presentation/design-system/components/";
import { usePosts } from "presentation/hooks";

import styles from "./styles.module.css";

export function Home() {
  const { posts } = usePosts();

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts?.map((post) => (
            <Post
              key={post.id}
              author={post.author?.name}
              authorImage={post.author?.avatarUrl}
              content={post.content}
              role={post.author?.role}
              creadtedAt={post?.publishedAt}
              comments={post.comments}
            />
          ))}
        </main>
      </div>
    </>
  );
}
