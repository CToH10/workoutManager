import { prisma } from "../../app";
import { iLoginInterface } from "../../interfaces/login.interface";
import { isValidPassword } from "../../utils/encrypt";
import jwt from "jsonwebtoken";

export const loginUserService = async (
  loginData: iLoginInterface
) => {
  const { email, password } = loginData;

  if (email && password) {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (user && isValidPassword(password, user.password)) {
      const token = jwt.sign({
        email: user.email,
        admin: user.admin,
        id: user.id
      },
        JSON.stringify(process.env.SECRET_KEY),
        {
          expiresIn: '1h'
        }
      );

      return token;
    }
  }
}