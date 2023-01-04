import styles from "./styles.module.css";
import * as I from "./types";

export function Avatar({ alt, src, size, hasBorder = true }: I.AvatarProps) {
  const isBorder = hasBorder ? styles.avatarWithBorder : styles.avatar;

  return (
    <>
      <img className={isBorder} src={src} alt={alt} />
    </>
  );
}
