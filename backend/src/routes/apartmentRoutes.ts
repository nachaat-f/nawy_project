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

// router.post('/api/apartments', async (req, res) => {
//   const { name, unitNumber, project,details, price, imageUrl } = req.body;

//   try {
//     const apartment = new Apartment({ name, unitNumber, project,details, price, imageUrl });
//     await apartment.save();
//     res.status(201).json(apartment);
//   } catch (error) {
//     res.status(400).json({ message: 'Error creating apartment', error });
//   }
// });

// Route to search apartments with filters
//router.get('/search', searchApartments);

export default router;
