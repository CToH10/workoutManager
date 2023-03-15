import { prisma } from "../../app";
import { iLoginInterface } from "../../interfaces/login.interface";
import { isValidPassword } from "../../utils/encrypt";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors";

export const loginUserService = async (
  loginData: iLoginInterface
): Promise<string> => {

  const { email, password } = loginData;

  const user = await prisma.user.findUnique({
    where: {
      email
    }
  });

  if (!user || !isValidPassword(password, user.password)) {
    throw new AppError("Wrong credentials", 401);
  }

  const token = jwt.sign({
    email: user.email,
    admin: user.admin
  },
    JSON.stringify(process.env.SECRET_KEY),
    {
      expiresIn: '1h',
      subject: JSON.stringify(user.id),
    }
  );

  return token;
}