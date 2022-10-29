import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const itemRouter = router({
  addItem: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ ctx, input }) => {
      const { name } = input;

      const item = await ctx.prisma.shoppingItem.create({
        data: {
          name,
        },
      });

      return item;
    }),
});
