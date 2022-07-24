import { getToken } from "next-auth/jwt";
export default class AuthService {
  static apiMustLoggedIn = async (req, res) => {
    const token = await getToken({ req });

    if (token) {
      // Signed in
    } else {
      // Not Signed in
      res.status(401);
      res.end();
    }
  };
}
