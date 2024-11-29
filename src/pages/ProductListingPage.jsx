import React, { useState } from 'react';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';

const ProductListingPage = () => {
  const [filters, setFilters] = useState([]);
  const [sortOrder, setSortOrder] = useState("lower-price");
  const [products, setProducts] = useState([
    { name: "K-Swiss V8 - Masculino", image: "public/Layer 1aa 2.png", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "public/Layer 1aa 2.png", price: 49.9 },
    { name: "K-Swiss V8 - Masculino", image: "public/Layer 1aa 2.png", price: 99.9, priceDiscount: 79.9 },
    { name: "K-Swiss V8 - Masculino", image: "public/Layer 1aa 2.png", price: 120 },
    { name: "K-Swiss V8 - Masculino", image: "public/Layer 1aa 2.png", price: 89.9 },
    { name: "K-Swiss V8 - Masculino", image: "public/Layer 1aa 2.png", price: 89.9 },
    { name: "K-Swiss V8 - Masculino", image: "public/Layer 1aa 2.png", price: 89.9 },
    { name: "K-Swiss V8 - Masculino", image: "public/Layer 1aa 2.png", price: 240, priceDiscount: 219.9 }
  ]);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "lower-price") return a.price - b.price;
    if (sortOrder === "higher-price") return b.price - a.price;
    return 0;
  });

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '308px', backgroundColor: 'white', padding: '16px' }}>
        <label style={{ fontSize: '16px', color: '#4D4D4D', display: 'block', marginBottom: '8px' }}>
          Ordenar por
        </label>
        <select 
          style={{ width: '100%', height: '60px', fontSize: '16px', color: '#4D4D4D', backgroundColor: '#F9F8FE', padding: '8px' }}
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="lower-price">Menor preço</option>
          <option value="higher-price">Maior preço</option>
        </select>
        <hr style={{ border: '1px solid #D3D3D3', margin: '16px 0' }} />
        <FilterGroup 
          title="Categorias" 
          inputType="checkbox" 
          options={[
            { text: "Opção 1", value: "opt1" },
            { text: "Opção 2", value: "opt2" },
            { text: "Opção 3", value: "opt3" },
            { text: "Opção 4" }
          ]} 
        />
      </div>
      
      <div style={{ flex: 1, marginLeft: '16px' }}>
        <Section 
          title={`${sortedProducts.length} produtos encontrados`}
          titleAlign="left"
        >
          <ProductListing products={sortedProducts} />
        </Section>
      </div>
    </div>
  );
};

export default ProductListingPage;
