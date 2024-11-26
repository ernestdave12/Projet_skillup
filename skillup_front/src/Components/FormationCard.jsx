import React from 'react';
import { Link } from 'react-router-dom';

const FormationCard = ({ formation }) => {
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

  return (
    <Link to={`/formation/${formation.id}`} className="block border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {formation.image && (
        <img src={`http://127.0.0.1:8000${formation.image}`} alt={formation.name} className="w-full h-48 object-cover rounded-md" />
      )}
      <h2 className="text-xl font-bold mt-2">{formation.name}</h2>
      <p className="text-gray-600 truncate">{formation.description}</p>
      <p className="text-gray-600">{formation.price} €</p>
      <div className="flex items-center">
        {renderStars(Math.round(formation.ratings))}
        <span className="ml-2 text-yellow-500">{formation.ratings}</span>
      </div>
    </Link>
  );
};

export default FormationCard;