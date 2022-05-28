import styles from "./index.module.css";
import { useCallback, memo } from "react";

type Props = {
  index: number,
  value: string;
  onClick: (index: number) => void;
}

export const Square: React.FC<Props> = memo(({
  index,
  value,
  onClick
}): JSX.Element => {

  console.log("square.");

  const handleClick = useCallback((_event: React.MouseEvent<HTMLButtonElement>) => {
    onClick(index);
  }, [index, onClick]);

  return (
    <button 
      className={styles["root__square"]}
      onClick={handleClick}
    >
      {value}
    </button>
  );
});