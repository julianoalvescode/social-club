import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./style.module.css";
import * as I from "./types";

import { Avatar } from "presentation/design-system/components";
import { Chronos, PurifyHTML } from "shared";

export function Comment({
  createdAt = "",
  author = "",
  authorImage = "",
  content = "",
}: I.CommentProps) {
  const sanitizedContent = () => ({
    __html: PurifyHTML.sanitize(content),
  });
  const formattedDate = Chronos.formatDistance(createdAt);

  return (
    <>
      <div className={styles.comment}>
        <Avatar src={authorImage} alt="" hasBorder={false} />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>{author}</strong>
                <time title={createdAt} dateTime={createdAt}>
                  {formattedDate}
                </time>
              </div>
              <button title="Delete button">
                <Trash size={24} />
              </button>
            </header>
            <div dangerouslySetInnerHTML={sanitizedContent()} />
          </div>
          <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
