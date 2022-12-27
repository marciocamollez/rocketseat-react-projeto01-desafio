import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>Texto</p>

      <button className={styles.deleteButton}>
        <Trash size={20} />
      </button>
    </div>
  );
}
