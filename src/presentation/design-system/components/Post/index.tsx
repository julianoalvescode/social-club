import * as I from "./types";
import styles from "./style.module.css";
import { Comment, Avatar } from "presentation/design-system/components";
import { Chronos } from "shared";

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
          <Avatar src={authorImage} alt={author} />
          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <span>{role}</span>
          </div>
        </div>
        <time title={creadtedAt} dateTime={creadtedAt}>
          {Chronos.formatDistance(creadtedAt)}
        </time>
      </header>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment createdAt="Cerca de 1 hora atrás" />
        <Comment createdAt="Cerca de 1 hora atrás" />
        <Comment createdAt="Cerca de 1 hora atrás" />
      </div>
    </article>
  );
}
