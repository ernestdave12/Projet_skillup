import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../index.css';

const FormationDetail = () => {
  const { id } = useParams();
  const [formation, setFormation] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/formations/${id}/`)
      .then(response => {
        setFormation(response.data);
      });
  }, [id]);

  if (!formation) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <img src={formation.image} alt={formation.nom} className="w-full h-64 object-cover rounded-md" />
      <h1 className="text-3xl font-bold mt-4">{formation.nom}</h1>
      <p className="text-gray-600">{formation.prix} €</p>
      <p className="text-yellow-500">Note: {formation.note}</p>
      <p className="mt-4">{formation.description}</p>
      <button className="bg-blue-500 text-white p-2 rounded mt-4">Ajouter au panier</button>
    </div>
  );
};

export default FormationDetail;