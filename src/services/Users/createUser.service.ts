import { prisma } from "../../app";
import { hashSync } from "bcryptjs";
import { iUserRequest, iUserReturn } from "../../interfaces/users.interface";
import { userReturnSchema } from "../../schemas";

export const createUserService = async (
  userData: iUserRequest
): Promise<iUserReturn> => {
  const { name, email, trainingExp, password, admin } = userData;

  const sendData = {
    name: name,
    email: email,
    trainingExp: trainingExp ? trainingExp : "beg",
    password: hashSync(password, 10),
    admin: admin ? admin : false,
  };

  const insertUser = await prisma.user.create({
    data: sendData,
  });

  const validatedUser = userReturnSchema.parse(insertUser);

  return validatedUser;
};
