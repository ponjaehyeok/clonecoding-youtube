import express from "express";
import { home, getUpload, postUpload } from "../controllers/videoController";
import { join, login } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.route("/upload").get(getUpload).post(postUpload);

export default globalRouter;