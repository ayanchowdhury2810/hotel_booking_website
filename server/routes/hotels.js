import express from 'express';
import Hotels from '../models/Hotels.js';
import { createError } from '../utils/error.js';

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  const newHotel = new Hotels(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updatedHotel = await Hotels.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Hotels.findByIdAndDelete(req.params.id);
    res.status(200).json('Hotel has been deleted');
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET
router.get('/:id', async (req, res) => {
  try {
    const hotel = await Hotels.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL
router.get('/', async (req, res, next) => {
  try {
    const hotels = await Hotels.find();
    res.status(200).json(hotels);
  } catch (err) {
    // res.status(500).json(err);
    next(err);
  }
});

export default router;
