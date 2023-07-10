import { prisma } from "../../app";
import { userReturnSchema } from "../../schemas";

export const recoverUserService = async (userId: number) => {
  const user = await prisma.user.update({
    data: {
      enabled: true,
      deletedAt: null,
    },
    where: {
      id: userId,
    },
  });

  return userReturnSchema.parse(user);
};
