import { prisma } from "../../app";
import { iUserRequest, iUserReturn, iUserUpdate } from "../../interfaces";
import { userReturnSchema } from "../../schemas";
import { encryptPassword } from "../../utils/encrypt";

export const updateUserService = async (
  data: iUserUpdate,
  userId: number,
  adminToken: boolean
): Promise<iUserReturn> => {
  const findUser = await prisma.user.findFirst({
    where: { id: userId },
  });

  const { name, email, trainingExp, admin, password } = findUser!;

  const newPassword = data.password ? encryptPassword(data.password) : password;

  const sendData: iUserRequest = adminToken
    ? {
        name: data.name || name,
        trainingExp: data.trainingExp || trainingExp!,
        admin: data.admin || admin!,
        email: data.email || email,
        password: newPassword,
      }
    : {
        name: data.name || name,
        trainingExp: trainingExp!,
        admin: admin!,
        email: data.email || email,
        password: newPassword,
      };

  const userUpdated = await prisma.user.update({
    where: { id: userId },
    data: {
      name: sendData.name,
      trainingExp: sendData.trainingExp!,
      admin: sendData.admin!,
      email: sendData.email,
      password: sendData.password,
    },
  });

  const validatedUser = userReturnSchema.parse(userUpdated);

  return validatedUser;
};
