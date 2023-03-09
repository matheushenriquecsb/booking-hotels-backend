import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);
  /* 
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

*/
  try {
    const savedRoom = newRoom.save();
    await Hotel.findByIdAndUpdate(hotelId, {
      $push: { rooms: savedRoom._id },
    });
    res.status(200).json(savedRoom);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllRooms = async (req, res) => {
  try {
    const getAllRooms = await Hotel.find();
    res.status(200).json(getAllRooms);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getRoomById = async (req, res) => {
  try {
    const getRoomById = await Room.findById(req.params.id);
    res.status(200).json(getRoomById);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {
      $set: req.body,
      new: true,
    });
    res.status(200).json(updatedRoom);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteRoom = async (req, res) => {
  try {
    await Room.findByIdAndRemove(req.params.id);
    res.status(200).json("Hotel has been deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
};
