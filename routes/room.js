import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
} from "../controllers/roomsControllers.js";
import { verifyAdmin } from "../middlewares/verifyAuth.js";
const router = express.Router();

router.post("/:hotelid", verifyAdmin, createRoom);
router.get("/", getAllRooms);
router.get("/:id", getRoomById);
router.put("/:id", verifyAdmin, updateRoom);
router.delete("/:id", verifyAdmin, deleteRoom);

export default router;
