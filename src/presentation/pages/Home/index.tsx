import { Header, Post, Sidebar } from "presentation/design-system/components/";

import styles from "./styles.module.css";

export function Home() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            authorImage="https://github.com/julianoalvescode.png"
            content="Lorem Ipsum"
            author="Juliano Alves"
            role="Software Engineer"
          />
          <Post
            authorImage="https://github.com/julianoalvescode.png"
            content="Lorem Ipsum"
            author="Juliano Alves"
            role="Software Engineer"
          />
        </main>
      </div>
    </>
  );
}
