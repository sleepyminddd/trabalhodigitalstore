import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Gallery from '../components/Gallery';
import Colecoes from '../components/Colecoes';

const HomePage = () => {
  const navigate = useNavigate();

  const products = [
    { name: "K-Swiss V8 - Masculino", image: "public/Layer 1aa 2.png", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "public/Layer 1aa 2.png", price: 49.9 },
    { name: "K-Swiss V8 - Masculino", image: "public/Layer 1aa 2.png", price: 120, priceDiscount: 99.9 },
    { name: "K-Swiss V8 - Masculino", image: "public/Layer 1aa 2.png", price: 89.9 },
  ];

  const galleryImages = [
    { src: "public/nikes.svg",},
    { src: "public/home-slide-1.jpeg" },
    { src: "public/home-slide-2.jpeg" },
    { src: "public/home-slide-3.jpeg" },
  ];
  return (
    <div>
      <Gallery
  images={galleryImages}
  className="custom-gallery"
  width="1440px"
  height="681px"
  radius="10px"
  showThumbs={false}
/>
      <Colecoes />
      <Section title="Produtos em alta" titleAlign="left">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          {products.map((product, index) => (
            <div key={index} style={{
                width: '292px', height: '321px', backgroundColor: '#fff', display: 'flex',
                flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '10px',
              }}>
              <img src={product.image} alt={product.name} style={{ width: '248px', objectFit: 'scale-down' }} />
              <h3 style={{ fontSize: '16px', textAlign: 'center' }}>{product.name}</h3>
              <div style={{ textAlign: 'center', marginTop: '5px' }}>
                {product.priceDiscount ? (
                  <>
                    <span style={{ textDecoration: 'line-through', color: 'grey', marginRight: '5px' }}>R$ {product.price.toFixed(2)}</span>
                    <span style={{ fontWeight: 'bold', color: '#1F1F1F' }}>R$ {product.priceDiscount.toFixed(2)}</span>
                  </>
                ) : (
                  <span style={{ fontWeight: 'bold', color: '#1F1F1F' }}>R$ {product.price.toFixed(2)}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default HomePage;