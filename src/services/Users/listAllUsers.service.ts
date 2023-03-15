import { prisma } from "../../app";
import { iUserList } from "../../interfaces/users.interface";
import { userListSchema } from "../../schemas";

export const listAllUsersService = async (): Promise<iUserList> => {
  const list = await prisma.user.findMany();

  const validatedList = userListSchema.parse(list);

  return validatedList;
};
