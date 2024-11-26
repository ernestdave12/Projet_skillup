import React from 'react';

const FormationCard = ({ formation }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      {formation.image && (
        <img src={formation.image} alt={formation.name} className="w-full h-48 object-cover rounded-md" />
      )}
      <h2 className="text-xl font-bold mt-2">{formation.name}</h2>
      <p className="text-gray-600">{formation.price} €</p>
      <p className="text-yellow-500">Note: {formation.ratings}</p>
    </div>
  );
};

export default FormationCard;