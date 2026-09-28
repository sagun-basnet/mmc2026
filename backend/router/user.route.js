import express from "express";
import {
  deleteUser,
  editUser,
  getSingleUser,
  getUser,
  postUser,
} from "../controllers/user.js";
import { isAdmin, isAuth, isSuperAdmin } from "../middleware/authMiddleware.js";

const route = express.Router();

route.get("/get-user", getUser);
route.get("/get-single-user/:id", isAuth, isAdmin, getSingleUser);
route.post("/post-user", isAuth, isSuperAdmin, postUser);
route.delete("/delete-user/:id", deleteUser);
route.put("/edit-user/:id", editUser);

export default route;
