import "dotenv";
declare global {
  namespace Express {
    interface Request {
      admin: boolean;
    }
  }
}
