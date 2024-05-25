import { z } from "zod";

export const z_board = z
  .object({
    rows: z.coerce.number().min(5).max(50),
    cols: z.coerce.number().min(5).max(50),
    bombs: z.coerce.number(),
  })
  .refine(
    (data) => data.bombs <= data.rows * data.cols * 0.2,
    (data) => ({
      message: `Cannot have more than ${data.rows * data.cols * 0.2} bombs`,
      path: ["bombs"],
    })
  );

export type t_board = z.infer<typeof z_board>;

export const z_cell = z.object({
  id: z.string(),
  open: z.boolean(),
  isBomb: z.boolean(),
  hasFlag: z.boolean(),
  bombsTouching: z.number().nullable(),
});

export type t_cell = z.infer<typeof z_cell>;

export const z_row = z.array(z_cell);

export type t_row = z.infer<typeof z_row>;

export const z_gameMatrix = z.array(z_row);

export type t_gameMatrix = z.infer<typeof z_gameMatrix>;
