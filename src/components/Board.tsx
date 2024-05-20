import { useAtomValue } from "jotai";
import { useEffect } from "react";

import Row from "./Row";

import { boardAtom } from "../App";

const Board = () => {
  const boardInfo = useAtomValue(boardAtom);
  useEffect(() => {
    console.log("boardInfo", boardInfo);
  }, [boardInfo]);
  return (
    <div className="border border-base-300">
      {boardInfo ? (
        boardInfo.map((boardRow, key) => (
          <Row key={key} rowColumns={boardRow} rowId={key} />
        ))
      ) : (
        <p>Please set board</p>
      )}
    </div>
  );
};

export default Board;
