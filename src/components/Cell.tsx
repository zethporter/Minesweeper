import { useAtom } from "jotai";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { t_cell } from "../utils/zod";
import { FlagIcon } from "@heroicons/react/16/solid";

import { boardAtom } from "../App";

const Cell = ({
  cell,
  rowId,
  colId,
}: {
  cell: t_cell;
  rowId: number;
  colId: number;
}) => {
  const [board, setBoard] = useAtom(boardAtom);
  const updateBoard = (_rowId: number, _colId: number) => {
    const newBoard = board!.map((row, i) => {
      if (i === _rowId) {
        return row.map((col, j) => {
          if (j === _colId) {
            return {
              ...col,
              open: true,
            };
          }
          return col;
        });
      }
      return row;
    });
    setBoard(newBoard);
  };
  return (
    <div
      onClick={() => updateBoard(rowId, colId)}
      className={twMerge(
        clsx(
          "h-6 w-6 border border-base-200 flex justify-center items-center",
          cell.open
            ? "bg-base-100"
            : "bg-primary hover:bg-gradient-to-br from-accent to-primary",
          cell.isBomb && "bg-error"
        )
      )}
    >
      {cell.hasFlag && <FlagIcon className="h-4 w-4 fill-primary" />}
    </div>
  );
};

export default Cell;
