import { useSetAtom } from "jotai";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";

import { boardAtom } from "../App";
import { z_board } from "../utils/zod";

const Header = () => {
  const setBoard = useSetAtom(boardAtom);

  const buildBoard = (rows: number, cols: number, bombs: number) => {
    const bombsPositions: number[] = [];
    const totalAvailablePositions = rows * cols;
    while (bombsPositions.length < bombs) {
      const newBomb = Math.floor(Math.random() * totalAvailablePositions);
      if (!bombsPositions.includes(newBomb)) {
        bombsPositions.push(newBomb);
      }
    }
    let totalCount = 0;
    const newBoardMatrix = [];
    for (let r = 0; r < rows; r++) {
      const newRow = [];
      for (let c = 0; c < cols; c++) {
        newRow.push({
          id: `${r}-${c}`,
          open: false,
          isBomb: bombsPositions.includes(totalCount),
          hasFlag: false,
          bombsTouching: null,
        });
        totalCount++;
      }
      newBoardMatrix.push(newRow);
    }
    setBoard(newBoardMatrix);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: { rows: 10, cols: 10, bombs: 15 },
    resolver: zodResolver(z_board),
  });

  return (
    <div className="w-full rounded-btn bg-base-200 p-1">
      <form
        className="flex flex-row justify-center gap-2"
        onSubmit={handleSubmit((data) =>
          buildBoard(data.rows, data.cols, data.bombs)
        )}
      >
        <div className="flex flex-col gap-1">
          <label className="input input-sm input-bordered flex items-center gap-2">
            Rows
            <input className="grow" type="number" {...register("rows")} />
          </label>
          <ErrorMessage
            errors={errors}
            name="rows"
            render={({ message }) => (
              <span className="label-text-alt text-error">{message}</span>
            )}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="input input-sm input-bordered flex items-center gap-2">
            Columns
            <input className="grow" type="number" {...register("cols")} />
          </label>
          <ErrorMessage
            errors={errors}
            name="cols"
            render={({ message }) => (
              <span className="label-text-alt text-error">{message}</span>
            )}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="input input-sm input-bordered flex items-center gap-2">
            Bombs
            <input className="grow" type="number" {...register("bombs")} />
          </label>
          <ErrorMessage
            errors={errors}
            name="bombs"
            render={({ message }) => (
              <span className="label-text-alt text-error">{message}</span>
            )}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">
          Set
        </button>
      </form>
    </div>
  );
};

export default Header;
