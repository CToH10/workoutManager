import "dotenv";
declare global {
  namespace Express {
    interface Request {
      info: {
        email: string,
        admin: boolean,
        id: string,
      }
    }
  }
}
