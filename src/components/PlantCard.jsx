// PlantCard.jsx
import React from 'react';
import './plantcard.css'; // Ensure the path is correct


const PlantCard = ({ plant, onAddToCart }) => {
  return (
    <div style={styles.card}>
      <img src={plant.image} alt={plant.name} style={styles.image} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    width: '150px', // Set a fixed width for the card
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s',
  },
  image: {
    width: '100%', // Image takes the full width of the card
    height: 'auto', // Maintain aspect ratio
    maxHeight: '150px', // Set a maximum height
    objectFit: 'cover', // Crop the image if it exceeds the height
  },
};

export default PlantCard;
