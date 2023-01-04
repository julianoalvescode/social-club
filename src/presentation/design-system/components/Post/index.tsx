import * as I from "./types";
import styles from "./style.module.css";
import { Comment, Avatar } from "presentation/design-system/components";
import { Chronos, PurifyHTML } from "shared";

export function Post({
  author = "",
  authorImage = "",
  content = "",
  role = "",
  creadtedAt = "Publicado 1h atrás",
}: I.Post) {
  const contentSantized = () => ({
    __html: PurifyHTML.sanitize(content),
  });
  const formattedDate = Chronos.formatDistance(creadtedAt);

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
          {formattedDate}
        </time>
      </header>
      <div className={styles.content}>
        <div dangerouslySetInnerHTML={contentSantized()} />
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
