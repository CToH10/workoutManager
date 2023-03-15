import { prisma } from "../../app";
import { iUserList } from "../../interfaces/users.interface";
import { userListSchema } from "../../schemas";

export const listAllUsersService = async (
  admin: boolean
): Promise<iUserList> => {
  const filter = admin ? {} : { enabled: true };
  const list = await prisma.user.findMany({
    where: filter,
  });

  const validatedList = userListSchema.parse(list);

  return validatedList;
};
