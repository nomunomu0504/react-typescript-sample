import styles from "./index.module.css";
import { Board } from "../board";
import { memo } from "react";

export const Game: React.FC<{}> = memo((): JSX.Element => {
  return (
    <>
      <div className={styles["root__game"]}>
        <div className={styles["root__game-board"]}>
          <Board />
        </div>
        <div className={styles["root__game-info"]}>
          <div>{/* status */}</div>
          <ol className={styles["root__ol"]}>{/* TODO */}</ol>
        </div>
      </div>
    </>
  );
});