import { t_row } from "../utils/zod";
import Cell from "./Cell";

const Row = ({
  rowColumns,
  rowId,
}: {
  rowColumns: t_row;
  rowId: number;
  // updateCell: (rowId: number, cellId: number, newCellInfo: t_cell) => void;
}) => {
  return (
    <div className="flex">
      {rowColumns.map((cell, key) => (
        <Cell key={key} cell={cell} rowId={rowId} colId={key} />
      ))}
    </div>
  );
};

export default Row;
