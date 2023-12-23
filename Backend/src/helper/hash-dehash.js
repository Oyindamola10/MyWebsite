import bcrypt from "bcrypt";

const salt = process.env.SALT;

async function hashPassword(password) {
  return await bcrypt.hash(password, Number(salt));
}

async function dehashPassword(password, hash) {
  return await bcrypt.compare(password, hash);
}

export { hashPassword, dehashPassword };
