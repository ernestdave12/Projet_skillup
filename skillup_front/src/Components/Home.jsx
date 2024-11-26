import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormationCard from './FormationCard';
import '../index.css'; 

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const fetchProducts = async (filters = {}) => {
    try {
      console.log("Fetching products with filters:", filters);
      const response = await axios.get('http://127.0.0.1:8000/api/products/', {
        params: filters,
      });
      console.log("Response data:", response.data);
      setProducts(response.data.results || []); // Accédez aux produits dans response.data.results
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    console.log("Fetching all products on initial load");
    fetchProducts();
  }, []);

  const handleSearch = () => {
    const filters = {};
    if (category) filters.category = category;
    if (price) filters.price = price;
    console.log("Applying filters:", filters);
    fetchProducts(filters);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex space-x-4 mb-4">
        <select onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded">
          <option value="">Toutes les catégories</option>
          <option value="Développement Personnel et Soft Skills">Développement Personnel et Soft Skills</option>
          <option value="Business et Entrepreneuriat">Business et Entrepreneuriat</option>
          <option value="Compétences Digitales">Compétences Digitales</option>
          <option value="Informatique et Programmation">Informatique et Programmation</option>
          <option value="Langues et Communication">Langues et Communication</option>
          <option value="Santé et Bien-être">Santé et Bien-être</option>
          <option value="Art et Créativité">Art et Créativité</option>
          <option value="Sciences et Éducation">Sciences et Éducation</option>
        </select>
        <input type="number" placeholder="Prix max" onChange={(e) => setPrice(e.target.value)} className="border p-2 rounded" />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">Rechercher</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map(product => (
            <FormationCard key={product.id} formation={product} />
          ))
        ) : (
          <p>Aucune formation trouvée.</p>
        )}
      </div>
    </div>
  );
};

export default Home;