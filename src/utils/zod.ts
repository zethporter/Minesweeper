import { z } from "zod";

export const z_board = z.object({
  rows: z.coerce.number().min(5).max(50),
  cols: z.coerce.number().min(5).max(50),
});

export type t_board = z.infer<typeof z_board>;
