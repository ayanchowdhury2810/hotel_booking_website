import express from 'express';
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailabity,
} from '../controllers/roomController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// CREATE
router.post('/:hotelId', verifyAdmin, createRoom);

// UPDATE
router.put('/:id', verifyAdmin, updateRoom);
// date update by users - confirm date of booking
router.put('/availability/:id', updateRoomAvailabity);

// DELETE
router.delete('/:id/:hotelId', verifyAdmin, deleteRoom);

// GET
router.get('/:id', getRoom);

// GET ALL
router.get('/', getRooms);

export default router;
