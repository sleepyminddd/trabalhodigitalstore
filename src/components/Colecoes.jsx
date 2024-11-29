import React from 'react';
import Section from './Section';

const Colecoes = () => {
  return (
    <><Section title="Coleções em destaque" titleAlign="left">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{
          width: '405px',
          height: '251px',
          top: '971px',
          left: '100px',
          backgroundColor: '#D8E3F2',
          radius: '4px',
        }}>
          <img
            src="public/collection-1.svg"
            alt="Coleção 1"
            style={{ width: '100%', height: '100%', borderRadius: '4px' }} />
        </div>
        <div style={{
          width: '405px',
          height: '251px',
          top: '971px',
          left: '100px',
          backgroundColor: '#D8E3F2',
          radius: '4px',
        }}>
          <img
            src="public/collection-2.svg"
            alt="Coleção 2"
            style={{ width: '100%', height: '100%', borderRadius: '4px' }} />
        </div>
        <div style={{
          width: '405px',
          height: '251px',
          top: '971px',
          left: '100px',
          backgroundColor: '#D8E3F2',
          radius: '4px',
        }}>
          <img
            src="public/collection-3.svg"
            alt="Coleção 3"
            style={{ width: '100%', height: '100%', borderRadius: '4px' }} />
        </div>
      </div>
    </Section>
      <Section title="Coleções em destaque" titleAlign="center">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {['camisetas-icon', 'calcas-icon', 'bones-icon', 'headphones-icon', 'tenis-icon'].map((icon, index) => (
        <img
          key={index}
          src={`public/${icon}.svg`}
          alt={icon}
          style={{ width: '104px', height: '104px', margin: '0' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = 'hue-rotate(130deg) saturate(1000%) brightness(0.8)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = 'none';
          }}
        />
      ))}
    </div>
      </Section></>
  );
};

export default Colecoes;