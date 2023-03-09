import express from "express";
import {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/usersControllers.js";
import { verifyUser, verifyAdmin } from "../middlewares/verifyAuth.js";

const router = express.Router();

router.get("/", verifyAdmin, getUsers);
router.get("/:id", verifyUser, getUserById);
router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);

export default router;
