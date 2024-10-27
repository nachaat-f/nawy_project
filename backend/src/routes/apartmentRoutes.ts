import express, { Router } from 'express';
import { getApartments, getApartmentById, addApartment } from '../controllers/apartmentController';
import { Apartment } from '../models/Apartment';
// ,searchApartments
const router: Router = express.Router();

// Route to get all apartments
router.get('/', getApartments);

// Route to get details of a specific apartment
router.get('/:id', getApartmentById);

// Route to add a new apartment
router.post('/', addApartment);

export default router;
