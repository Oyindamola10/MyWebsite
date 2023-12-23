import Appresponse from "../../helper/appResponse.js";
import User from "../../models/user.js";
import { hashPassword } from "../../helper/hash-dehash.js";

const register = async (req, res) => {
  const { fullname, username, email, phone, password } = req.body;
  if (!fullname || !username || !email || !password) {
    return Appresponse(res, 400, "Missing attribute");
  }
  try {
    // TODO: Validate user infor before processing

    /* 
    NOTE: "Joi" can handle the confirm password attribute so it is not needed in the user model 
    */

    const user = await User.findOne({ email });

    if (user) {
      return Appresponse(res, 403, "Email already in use");
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
      fullname,
      username,
      email,
      phone,
      password: hashedPassword,
    });

    return Appresponse(res, 201, "Account created", newUser);
  } catch (err) {
    console.error(err);
    return Appresponse(res, 500, "Internal server error", err);
  }
};

export default register;
