// import { Request, Response } from 'express';
// import { Apartment } from '../models/Apartment';

// // Get All Apartments
// export const getApartments = async (req: Request, res: Response) => {
//   try {
//     const apartments = await Apartment.find();
//     res.json(apartments);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching apartments' });
//   }
// };

// // Get Apartment Details by ID
// export const getApartmentById = async (req: Request, res: Response) => {
//   try {
//     const apartment = await Apartment.findById(req.params.id);
//     if (!apartment) {
//       return res.status(404).json({ message: 'Apartment not found' });
//     }
//     res.json(apartment);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching apartment details' });
//   }
// };

// // Add a New Apartment
// export const addApartment = async (req: Request, res: Response) => {
//   const { name, unitNumber, project, details } = req.body;
  
//   try {
//     const newApartment = new Apartment({ name, unitNumber, project, details });
//     await newApartment.save();
//     res.status(201).json(newApartment);
//   } catch (error) {
//     res.status(500).json({ message: 'Error adding apartment' });
//   }
// };

// Get All Apartments
// export const getApartments = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const apartments = await Apartment.find();
//     res.json(apartments);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching apartments' });
//   }
// };

// export const searchApartments = async (req: Request, res: Response): Promise<void> => {
//     try {
//       // Get filter criteria from query parameters
//       const { name, unitNumber, project } = req.query;
      
  
//       // Build the filter object
//       const filter: any = {};
//       if (name) {
//         filter.name = { $regex: name, $options: 'i' }; // Case-insensitive search
//       }
//       if (unitNumber) {
//         filter.unitNumber = { $regex: unitNumber, $options: 'i' };
//       }
//       if (project) {
//         filter.project = { $regex: project, $options: 'i' };
//       }
//       console.log(filter); // Add this line before querying the database

  
//       // Fetch apartments with filters applied
//       const apartments = await Apartment.find(filter);
//       res.json(apartments);
//     } catch (error) {
//       res.status(500).json({ message: 'Error fetching apartments' });
//     }
//   };



// Get All Apartments with Filtering
// export const getApartments = async (req: Request, res: Response): Promise<void> => {
//     try {
//       // Get filter criteria from query parameters
//       const { name, unitNumber, project } = req.query;
  
//       // Build the filter object
//       const filter: any = {};
//       if (name) {
//         filter.name = { $regex: name, $options: 'i' }; // Case-insensitive search
//       }
//       if (unitNumber) {
//         filter.unitNumber = { $regex: unitNumber, $options: 'i' };
//       }
//       if (project) {
//         filter.project = { $regex: project, $options: 'i' };
//       }

  
//       // Fetch apartments with filters applied
//       const apartments = await Apartment.find(filter);
//       res.json(apartments);
//     } catch (error) {
//       res.status(500).json({ message: 'Error fetching apartments' });
//     }
//   };
  
import { Request, Response } from 'express';
import { Apartment } from '../models/Apartment';

// Get All Apartments with Filtering
export const getApartments = async (req: Request, res: Response): Promise<void> => {
  try {
    // Get filter criteria from query parameters
    const { name, unitNumber, project, minPrice, maxPrice } = req.query;

    

    // Build the filter object
    const filter: any = {};
    if (name) {
      filter.name = { $regex: name, $options: 'i' }; // Case-insensitive search
    }
    if (unitNumber) {
      filter.unitNumber = { $regex: unitNumber, $options: 'i' };
    }
    if (project) {
      filter.project = { $regex: project, $options: 'i' };
    }
    if (minPrice) {
      filter.price = { ...filter.price, $gte: Number(minPrice) }; // Greater than or equal to minPrice
    }
    if (maxPrice) {
      filter.price = { ...filter.price, $lte: Number(maxPrice) }; // Less than or equal to maxPrice
    }

    // Fetch apartments with filters applied
    const apartments = await Apartment.find(filter);
    res.json(apartments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching apartments' });
  }
};


// Get Apartment Details by ID
export const getApartmentById = async (req: Request, res: Response): Promise<void> => {
  try {
    const apartment = await Apartment.findById(req.params.id);
    if (!apartment) {
      res.status(404).json({ message: 'Apartment not found' });
      return;
    }
    res.json(apartment);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching apartment details' });
  }
};

// Add a New Apartment
export const addApartment = async (req: Request, res: Response): Promise<void> => {
  const { name, unitNumber, project, details ,price,imageUrl} = req.body;

  console.log("Received data:", req.body);
  
  try {
    const newApartment = new Apartment({ name, unitNumber, project, details ,price,imageUrl});
    const savedApartment = await newApartment.save();
   /* await newApartment.save();*/
   console.log("Saved apartment:", savedApartment);
    res.status(201).json(savedApartment);
  } catch (error) {
    console.error("Error saving apartment:", error);
    res.status(500).json({ message: 'Error adding apartment' });
  }
 };