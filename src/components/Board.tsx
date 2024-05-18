import { useAtomValue } from "jotai";

import Row from "./Row";

import { boardAtom } from "../App";

const Board = () => {
  const boardInfo = useAtomValue(boardAtom);
  return (
    <div className="bg-transparent">
      {Array.from(Array(boardInfo.rows).keys()).map((key) => (
        <Row key={key} columns={boardInfo.cols} />
      ))}
    </div>
  );
};

export default Board;
