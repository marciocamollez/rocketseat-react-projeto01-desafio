import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Numbers } from "./components/Numbers";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Numbers />
      </div>
    </>
  );
}

export default App;
