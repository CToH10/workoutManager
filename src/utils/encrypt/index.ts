import CryptoJS from "crypto-js";

const encryptPassword = (password: string): string => {
  const hashedPassword = CryptoJS.HmacSHA256(password, JSON.stringify(process.env.SECRET_KEY)).toString();

  return hashedPassword;
}

const isValidPassword = (rawPassword: string, dbPassword: string): boolean => {
  const hashedPassword = encryptPassword(rawPassword);

  return hashedPassword === dbPassword;
}

export {
  encryptPassword,
  isValidPassword,
}