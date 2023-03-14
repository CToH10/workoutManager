import { prisma } from "../../app";
import { userReturnSchema } from "../../schemas";

export const listUserService = async (id: number) => {
  const foundUser = await prisma.user.findUnique({ where: { id } });

  const validatedUser = userReturnSchema.parse(foundUser);

  return validatedUser;
};
