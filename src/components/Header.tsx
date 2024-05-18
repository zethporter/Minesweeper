import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";

import { boardAtom } from "../App";
import { z_board } from "../utils/zod";

const Header = () => {
  const [board, setBoard] = useAtom(boardAtom);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: board,
    resolver: zodResolver(z_board),
  });

  return (
    <div className="w-full rounded-btn bg-base-200 p-1">
      <form
        className="flex flex-row justify-center gap-2"
        onSubmit={handleSubmit((data) => setBoard(data))}
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
        <button type="submit" className="btn btn-primary btn-sm">
          Set
        </button>
      </form>
    </div>
  );
};

export default Header;
