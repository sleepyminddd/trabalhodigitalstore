import React from 'react';

const ProductCard = ({ name, image, price, priceDiscount }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', width: '200px', textAlign: 'center' }}>
      <img src={image} alt={name} style={{ width: '100%', height: 'auto' }} />
      <h3 style={{ fontSize: '16px', color: '#333', margin: '8px 0' }}>{name}</h3>
      <div style={{ fontSize: '14px', color: '#333' }}>
        {priceDiscount ? (
          <div>
            <span style={{ textDecoration: 'line-through', color: '#999' }}>R$ {price.toFixed(2)}</span>
            <span style={{ fontWeight: 'bold', marginLeft: '8px' }}>R$ {priceDiscount.toFixed(2)}</span>
          </div>
        ) : (
          <span style={{ fontWeight: 'bold' }}>R$ {price.toFixed(2)}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
