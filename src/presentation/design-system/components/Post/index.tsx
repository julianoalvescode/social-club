import * as I from "./types";
import styles from "./style.module.css";

export function Post({
  author = "",
  authorImage = "",
  content = "",
  role = "",
  creadtedAt = "Publicado 1h atrás",
}: I.Post) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={authorImage} alt={author} />
          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <span>{role}</span>
          </div>
        </div>
        <time dateTime={creadtedAt}>{creadtedAt}</time>
      </header>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
    </article>
  );
}

// Create function observe if a certain class is in the element
