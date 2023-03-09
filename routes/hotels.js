import express from "express";

import {
  createHotel,
  getAllHotels,
  getHotelById,
  updateHotel,
  deleteHotel,
  getHotelByCity,
  getHotelByType,
} from "../controllers/hotelControllers.js";
import { verifyAdmin } from "../middlewares/verifyAuth.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);
router.get("/", getAllHotels);
router.get("/find/:id", getHotelById);
router.get("/countbycity", getHotelByCity);
router.get("/countbytype", getHotelByType);

router.put("/:id", verifyAdmin, updateHotel);
router.delete("/:id", verifyAdmin, deleteHotel);

export default router;
