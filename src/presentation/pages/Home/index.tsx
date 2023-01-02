import { Header, Post, Sidebar } from "presentation/design-system/components/";

import styles from "./styles.module.css";

export function Home() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post content="Lorem Ipsum" author="Juliano Alves" />
          <Post content="Lorem Ipsum" author="Juliano Alves" />
        </main>
      </div>
    </>
  );
}
