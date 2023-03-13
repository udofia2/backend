import express from "express";
import { isActiveUser } from "./../middlewares/isActiveUser";
import validate from "./../utils/yupValidations";
import controller from "./../controllers/userController";
import trimRequest from "trim-request";

import schemas from "./../validations/userValidations";

const router = express.Router();

router.route("/").get(trimRequest.all, isActiveUser, controller.getUserInfo);

export default router;
