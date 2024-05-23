import { useAtom } from "jotai";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { t_cell } from "../utils/zod";
import { FlagIcon, FireIcon } from "@heroicons/react/16/solid";

import { boardAtom } from "../App";
import { updateBoard, setFlag } from "../utils/gameFunctions";

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

  return (
    <div
      onClick={() =>
        cell.hasFlag ? null : setBoard(updateBoard(rowId, colId, board))
      }
      onContextMenu={(e) => {
        e.preventDefault();
        setBoard(setFlag(rowId, colId, board));
      }}
      className={twMerge(
        clsx(
          "btn btn-square btn-sm rounded-none btn-primary",
          cell.open && "btn-disabled pointer-events-none",
          cell.hasFlag && ""
        )
      )}
    >
      {cell.open ? (
        cell.isBomb ? (
          <FireIcon className="h-4 w-4 fill-yellow-400 stroke-orange-500" />
        ) : (
          <span className="text-base-content">{cell.bombsTouching}</span>
        )
      ) : cell.isBomb ? (
        <FireIcon className="h-4 w-4 fill-yellow-400 stroke-orange-500" />
      ) : cell.hasFlag ? (
        <FlagIcon className="h-4 w-4 fill-error" />
      ) : null}
    </div>
  );
};

export default Cell;
