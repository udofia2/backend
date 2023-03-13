import { UserModel } from "./../models/index";
import ApiError from "./../utils/ApiError";

const getUserFromId = async (userId) => {
  const user = await UserModel.findById(userId);
  if (!user) throw new ApiError("Invalid User Id");
  return user;
};

export { getUserFromId };
