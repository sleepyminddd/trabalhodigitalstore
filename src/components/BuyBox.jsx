import React from 'react';
import ProductOptions from './ProductOptions';
import starIcon from '../assets/star-icon.svg';

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
  return (
    <div style={{
      border: '1px solid #E5E7EB',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '350px',
      backgroundColor: '#fff',
    }}>
      <h1 style={{ fontSize: '32px', color: '#374151' }}>{name}</h1>
      <p style={{ fontSize: '12px', color: '#9CA3AF' }}>Ref: {reference}</p>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
        <span style={{
          backgroundColor: '#F59E0B',
          borderRadius: '4px',
          padding: '2px 6px',
          fontSize: '14px',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
        }}>
          {stars} <img src={starIcon} alt="star" style={{ marginLeft: '5px', width: '14px', height: '14px' }} />
        </span>
        <span style={{ marginLeft: '8px', fontSize: '14px', color: '#9CA3AF' }}>({rating} avaliações)</span>
      </div>
      <div style={{ marginTop: '16px' }}>
        {priceDiscount ? (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '32px', color: '#374151' }}>R${priceDiscount.toFixed(2)}</span>
            <span style={{
              fontSize: '16px',
              color: '#9CA3AF',
              textDecoration: 'line-through',
              marginLeft: '10px',
            }}>
              R${price.toFixed(2)}
            </span>
          </div>
        ) : (
          <span style={{ fontSize: '32px', color: '#374151' }}>R${price.toFixed(2)}</span>
        )}
      </div>
      <p style={{ fontSize: '14px', color: '#374151', marginTop: '16px' }}>{description}</p>

      <div style={{ marginTop: '16px' }}>
        {children}
      </div>
      <button style={{
        marginTop: '20px',
        width: '100%',
        padding: '12px',
        backgroundColor: '#F59E0B',
        color: '#FFFFFF',
        fontSize: '16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        COMPRAR
      </button>
    </div>
  );
};

export default BuyBox;