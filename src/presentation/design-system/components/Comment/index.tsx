import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./style.module.css";
import * as I from "./types";

import { Avatar } from "presentation/design-system/components";

export function Comment({ createdAt = "" }: I.CommentProps) {
  return (
    <>
      <div className={styles.comment}>
        <Avatar
          src="https://github.com/julianoalvescode.png"
          alt=""
          hasBorder={false}
        />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Juliano Alves</strong>
                <time title={createdAt} dateTime={createdAt}>
                  {createdAt}
                </time>
              </div>
              <button title="Delete button">
                <Trash size={24} />
              </button>
            </header>
            <p>Muito bom, parabéns!</p>
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
