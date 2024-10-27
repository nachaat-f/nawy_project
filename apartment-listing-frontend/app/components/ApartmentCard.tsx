import Link from 'next/link';
import Image from 'next/image'
// Define the structure for the apartment prop
interface Apartment {
  _id: string;
  name: string;
  imageUrl: string;
}

const ApartmentCard = ({ apartment }: { apartment: Apartment }) => {

 
  return (
    <div className="apartment-card">
  
       <img
    alt={apartment.name}
    src={apartment.imageUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB0XL2_UiEmFnSXzW-q7LSJ485yFxjp-M_nA&s"}
    width={2250}
    height={1390}
/>
      <h3>{apartment.name}</h3>
      <Link href={`/apartments/${apartment._id}`}>
        <button className="details-button">View Details</button>
      </Link>

      <style jsx>{`
        .apartment-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          text-align: center;
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }
        .apartment-card:hover {
          transform: translateY(-5px);
        }
        img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 8px;
        }
        h3 {
          margin: 12px 0;
          font-size: 1.2rem;
          color: #333;
          font-weight: 600;
        }
        .details-button {
          padding: 8px 16px;
          font-size: 1rem;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .details-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default ApartmentCard;
