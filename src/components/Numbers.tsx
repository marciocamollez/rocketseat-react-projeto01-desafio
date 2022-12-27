import styles from "./Numbers.module.css";
import { Task } from "./Task";

export function Numbers() {
  return (
    <section>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>10</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>2 de 10</span>
        </div>
      </header>

      <div className={styles.list}>
        <Task />
        <Task />
      </div>
    </section>
  );
}
