// "use client";
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { use } from 'react';

// const ApartmentDetails = ({ params }: { params: { id: string } }) => {
//   // Resolve params before using `id`
//   const { id } = params;
//   const [apartment, setApartment] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchApartment = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/apartments/${id}`);
//         setApartment(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching apartment details:", error);
//         setLoading(false);
//       }
//     };

//     fetchApartment();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (!apartment) return <p>Apartment not found</p>;

//   return (
//     <div>
//       <h1>{apartment.name}</h1>
//       <p>Unit Number: {apartment.unitNumber}</p>
//       <p>Type: {apartment.project}</p>
//       <p>Details:{apartment.details}</p>  
//       <p>Price: ${apartment.price}</p>   
//       <img src={apartment.imageUrl || "/placeholder.jpg"} alt={apartment.name} />
//     </div>
//   );
// };

// export default ApartmentDetails;


// "use client";
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const ApartmentDetails = ({ params }: { params: { id: string } }) => {
//   const { id } = params;
//   const [apartment, setApartment] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchApartment = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/apartments/${id}`);
//         setApartment(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching apartment details:", error);
//         setLoading(false);
//       }
//     };

//     fetchApartment();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;

//   if (!apartment) return <p>Apartment not found</p>;

//   return (
//     <div>
//       <h1>{apartment.name}</h1>
//       <p>Unit Number: {apartment.unitNumber}</p>
//       <p>Project: {apartment.project}</p>
//       <p>Price: ${apartment.price}</p>
//       <img src={apartment.imageUrl || "/placeholder.jpg"} alt={apartment.name} />
//     </div>
//   );
// };

// export default ApartmentDetails;

// "use client";

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';

// const ApartmentDetails = ({ params }: { params: { id: string } }) => {
//   const router = useRouter();
//   const [apartment, setApartment] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchApartmentDetails = async () => {
//       try {
//         const response = await axios.get(`/api/apartments/${params.id}`);
//         setApartment(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching apartment details:", error);
//         setLoading(false);
//       }
//     };

//     fetchApartmentDetails();
//   }, [params.id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!apartment) {
//     return <p>Apartment not found</p>;
//   }

//   return (
//     <div>
//       <h1>{apartment.name}</h1>
//       <img src={apartment.imageUrl || "/placeholder.jpg"} alt={apartment.name} />
//       <p>Unit Number: {apartment.unitNumber}</p>
//       <p>Project: {apartment.project}</p>
//       <p>Description: {apartment.description}</p>
//       {/* Add more apartment details as needed */}
//     </div>
//   );
// };

// export default ApartmentDetails;

"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './ApartmentDetails.module.css'; // Import the CSS module

const ApartmentDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [apartment, setApartment] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApartment = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/apartments/${id}`);
        setApartment(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching apartment details:", error);
        setLoading(false);
      }
    };

    fetchApartment();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!apartment) return <p>Apartment not found</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{apartment.name}</h1>
      <p className={styles.details}>Unit Number: {apartment.unitNumber}</p>
      <p className={styles.details}>Type: {apartment.project}</p>
      <p className={styles.details}>Details: {apartment.details}</p>
      <p className={styles.price}>Price: ${apartment.price}</p>
      <img src={apartment.imageUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB0XL2_UiEmFnSXzW-q7LSJ485yFxjp-M_nA&s"} alt={apartment.name} className={styles.image}/>
    </div>
  );
};

export default ApartmentDetails;
