import { prisma } from "../../app";

export const deleteUserService = async (userId: number) => {
  const dateNow = new Date();
  await prisma.user.update({
    data: {
      deletedAt: dateNow,
      enabled: false,
    },
    where: {
      id: userId,
    },
  });
};
