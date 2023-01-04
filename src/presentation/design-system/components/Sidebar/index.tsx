import styles from "./style.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "presentation/design-system/components";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
        alt=""
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/julianoalvescode.png" alt="Logo" />
        <strong>Juliano Alves</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
