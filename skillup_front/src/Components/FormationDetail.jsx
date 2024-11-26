import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../index.css';

const FormationDetail = () => {
  const { id } = useParams();
  const [formation, setFormation] = useState(null);

  useEffect(() => {
    const fetchFormation = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}/`);
        setFormation(response.data.product);
      } catch (error) {
        console.error("Error fetching formation details:", error);
      }
    };

    fetchFormation();
  }, [id]);

  if (!formation) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4 flex">
      {formation.image && (
        <img src={`http://127.0.0.1:8000${formation.image}`} alt={formation.name} className="w-1/2 h-auto object-cover rounded-md" />
      )}
       <div className="ml-4">
        <h1 className="text-3xl font-bold mt-2">{formation.name}</h1>
        <p className="text-gray-600">{formation.description}</p>
        <p className="text-gray-600">{formation.price} €</p>
        <p className="text-gray-600">Auteur: {formation.author}</p>
        <p className="text-gray-600">Catégorie: {formation.category}</p>
        <p className="text-gray-600">En stock: {formation.stock}</p>
        <div className="flex items-center">
          {renderStars(Math.round(formation.ratings))}
          <span className="ml-2 text-yellow-500">{formation.ratings}</span>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded mt-4">Ajouter au panier</button>
      </div>
    </div>
  );
};

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className="text-yellow-500">&#9733;</span>); // étoile pleine
    } else {
      stars.push(<span key={i} className="text-gray-300">&#9733;</span>); // étoile vide
    }
  }
  return stars;
};

export default FormationDetail;