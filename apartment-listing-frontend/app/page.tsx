"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import ApartmentCard from './components/ApartmentCard';

const Home = () => {
  const [apartments, setApartments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [unitNumber, setUnitNumber] = useState('');
  const [project, setProject] = useState('');
  const [minPrice, setMinPrice] = useState(''); // Minimum price state
  const [maxPrice, setMaxPrice] = useState(''); // Maximum price state
  const [modalOpen, setModalOpen] = useState(false); // State for modal visibility
  const [newApartment, setNewApartment] = useState({
    name: '',
    unitNumber: '',
    project: '',
    details: '',
    imageUrl: '',
    price: '',
  });

  useEffect(() => {
    fetchApartments();
  }, [search, unitNumber, project, minPrice, maxPrice]); // Add minPrice and maxPrice to dependencies

  const fetchApartments = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/apartments', {
        params: { name: search, unitNumber, project,  minPrice, maxPrice} // Include price range in the request
      });
      console.log("hena");
      console.log(response.data);
      debugger;

      setApartments(response.data);
      response.data.forEach((apartment: any) => {
        console.log("Apartment Details:", apartment);
      });
    }catch (error) {
      console.error('Error fetching apartments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddApartment = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post('http://localhost:5000/api/apartments', newApartment);
      setApartments([...apartments, response.data]); // Update apartment list
      setNewApartment({ name: '', unitNumber: '', project: '', details: '', price: '', imageUrl: '' }); // Reset form
      setModalOpen(false); // Close modal
    } catch (error) {
      console.error('Error adding apartment:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Apartment List</h1>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by unit number..."
          value={unitNumber}
          onChange={(e) => setUnitNumber(e.target.value)}
        />

        <select
          value={project}
          onChange={(e) => setProject(e.target.value)}
          className="input-style"
        >
          <option value="" >Filter by type...</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="TwinHouse">TwinHouse</option>
          <option value="TownHouse">TownHouse</option>
          <option value="Duplex">Duplex</option>
          <option value="Chalet">Chalet</option>
          <option value="Studio">Studio</option>
          <option value="Cabin">Cabin</option>
        </select>

        {/* Price Range Filters */}
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <button onClick={() => setModalOpen(true)} className="add-button1">
          Add New Apartment
        </button>
      </div>

      {loading ? <p>Loading...</p> : (
        <div className="grid">
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment._id} apartment={apartment} />
          ))}
        </div>
      )}

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="modal-header">Add New Apartment</h2>
            <form onSubmit={handleAddApartment} className="modal-body">
              <input
                type="text"
                placeholder="Apartment Name"
                value={newApartment.name}
                onChange={(e) => setNewApartment({ ...newApartment, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Unit Number"
                value={newApartment.unitNumber}
                onChange={(e) => setNewApartment({ ...newApartment, unitNumber: e.target.value })}
                required
              />
              <select
                value={newApartment.project}
                onChange={(e) => setNewApartment({ ...newApartment, project: e.target.value })}
                required
              >
                <option value="" disabled>Select Type</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="TwinHouse">TwinHouse</option>
                <option value="TownHouse">TownHouse</option>
                <option value="Duplex">Duplex</option>
                <option value="Chalet">Chalet</option>
                <option value="Studio">Studio</option>
                <option value="Cabin">Cabin</option>
              </select>
              <input
                type="text"
                placeholder="Details"
                value={newApartment.details}
                onChange={(e) => setNewApartment({ ...newApartment, details: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newApartment.imageUrl}
                onChange={(e) => setNewApartment({ ...newApartment, imageUrl: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="Price"
                value={newApartment.price}
                onChange={(e) => setNewApartment({ ...newApartment, price: e.target.value })}
                required
              />
              <div className="modal-footer">
                <button type="submit" className="add-button">Add Apartment</button>
                <button type="button" onClick={() => setModalOpen(false)} className="close-button">Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;


