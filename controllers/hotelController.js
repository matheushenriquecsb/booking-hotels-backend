import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllHotels = async (req, res) => {
  const { min, max, ...others } = req.query;
  try {
    const getAllHotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max | 999 },
    }).limit(req.query.limit);
    res.status(200).json(getAllHotels);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getHotelById = async (req, res) => {
  try {
    const getHotelById = await Hotel.findById(req.params.id);
    res.status(200).json(getHotelById);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getHotelByCity = async (req, res) => {
  const cities = req.query.cities.split(",");

  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getHotelByType = async (req, res) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmentCount },
      { type: "resort", count: resortCount },
      { type: "villa", count: villaCount },
      { type: "cabin", count: cabinCount },
    ]);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
      new: true,
    });
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndRemove(req.params.id);
    res.status(200).json("Hotel has been deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
};
