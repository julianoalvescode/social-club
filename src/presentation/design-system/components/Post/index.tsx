import * as I from "./types";

export function Post({ author = "", authorImage = "", content = "" }: I.Post) {
  return (
    <article>
      <header>
        <img src={authorImage} alt={author} />
        <div>
          <strong>{author}</strong>
          <span>4 min</span>
        </div>
      </header>
      <p>{content}</p>
    </article>
  );
}
