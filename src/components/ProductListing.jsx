import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import PlantCard from './PlantCard';

const products = [
  { id: 1, name: 'Snake Plant', price: 20, image: 'https://res.cloudinary.com/bloomnation/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1564196480/vendor/6402/catalog/product/2/0/20190726080052_file_5d3b5bf494ecc_5d3b5c0d289ec.jpg' },
  { id: 2, name: 'Peace Lily', price: 25, image: 'https://th.bing.com/th/id/OIP.SR1eFRsznBxEHODRm9tn4AAAAA?rs=1&pid=ImgDetMain' },
  // Add more plants here...
];

const ProductListing = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <h2>Our Plants</h2>
      {products.map((plant) => (
        <PlantCard key={plant.id} plant={plant} onAddToCart={() => dispatch(addToCart(plant))} />
      ))}
    </div>
  );
};

export default ProductListing;
