import styles from "./Header.module.css";
import Logo from "../assets/logo.svg";
import { PlusCircle } from "phosphor-react";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="Ignite" />
      </header>

      <form className={styles.form}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar <PlusCircle />
        </button>
      </form>
    </>
  );
}
