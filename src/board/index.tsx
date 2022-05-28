import { Square } from "../square";
import styles from "./index.module.css";
import { useCallback, useState, useMemo, memo } from "react";

const defaultSquares: string[] = Array(9).fill(null);
const defaultXIsNext: boolean = true;

export const Board: React.FC<{}> = memo((): JSX.Element => {

  // 各碁盤の目
  const [squares, setSqueares] = useState<string[]>(defaultSquares);

  // 手番
  const [xIsNext, setXIsNext] = useState<boolean>(defaultXIsNext);

  // 勝者
  const winner = useMemo((): string | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }, [squares]);

  // ゲームステータス
  const status = useMemo((): string | null => {
    if (winner !== null) { 
      return `${winner} won!`;
    } else {
      return `Next player: ${xIsNext ? "X" : "O"}`;
    }
  }, [winner, xIsNext]);

  // 碁盤の目タップイベント
  const onSquareClick = useCallback((index: number): void => {
    // != は undefined も含む
    if (winner != null) { return; }

    setSqueares((prevSquares): string[] => {
      if (prevSquares[index] != null) {
        return prevSquares;
      }
      const nextSquares = [...prevSquares];
      setXIsNext((prevXIsNext) => {
        nextSquares[index] = prevXIsNext ? "X" : "O";
        return !prevXIsNext
      });
      return nextSquares;
    });
    
  },
  [winner]);

  return (
    <>
      <div>
        <div className={styles["root__status"]}>{status}</div>
      </div>
      <div className={styles["root__board-row"]}>
        <Square index={0} value={squares[0]} onClick={onSquareClick} />
        <Square index={1} value={squares[1]} onClick={onSquareClick} />
        <Square index={2} value={squares[2]} onClick={onSquareClick} />
      </div>
      <div className={styles["root__board-row"]}>
        <Square index={3} value={squares[3]} onClick={onSquareClick} />
        <Square index={4} value={squares[4]} onClick={onSquareClick} />
        <Square index={5} value={squares[5]} onClick={onSquareClick} />
      </div>
      <div className={styles["root__board-row"]}>
        <Square index={6} value={squares[6]} onClick={onSquareClick} />
        <Square index={7} value={squares[7]} onClick={onSquareClick} />
        <Square index={8} value={squares[8]} onClick={onSquareClick} />
      </div>
    </>
  );
});