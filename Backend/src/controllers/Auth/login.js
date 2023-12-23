import Appresponse from "../../helper/appResponse.js";
import User from "../../models/user.js";
import { dehashPassword } from "../../helper/hash-dehash.js";

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return Appresponse(res, 400, "Missing attribute");
  }
  try {
    // TODO: Validate user input before proceding

    const user = await User.findOne({ username }).select("+password");

    if (!user) {
      return Appresponse(res, 404, "User not found");
    }

    const match = await dehashPassword(password, user.password);

    if (!match) {
      return Appresponse(res, 401, "username or password invalid");
    }

    // TODO: Send an access token access token to the user
    return Appresponse(res, 200, "Sign In authorized");

    /*
    NOTE: The access token will allow user make request to protected routes
    */
  } catch (err) {
    console.error(err);
    return Appresponse(res, 500, "Internal server error", err);
  }
};

export default login;
