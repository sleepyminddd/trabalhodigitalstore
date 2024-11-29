import React from 'react';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import BuyBox from '../components/BuyBox';
import Gallery from '../components/Gallery';

const ProductViewPage = () => {
  const product = {
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    price: 210,
    priceDiscount: 219,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    images: [
      { src: "public/WhiteSneakers.png" },
      { src: "public/WhiteSneakers.png" },
      { src: "public/WhiteSneakers.png" },
      { src: "public/WhiteSneakers.png" },
      { src: "public/WhiteSneakers.png" },
    ],
  };

  const recommendedProducts = [
    { name: "Air Jordan 1", image: "public/produc-image-1.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "Tenis feio que eu não sei o nome", image: "public/produc-image-2.jpeg", price: 49.9 },
  ];

  return (
    <div className="product-view-page" style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px', padding: '20px' }}>
        <Gallery
          images={[
            { src: "public/WhiteSneakers.png" },
            { src: "public/WhiteSneakers.png" },
            { src: "public/WhiteSneakers.png" },
            { src: "public/WhiteSneakers.png" },
            { src: "public/WhiteSneakers.png" },
          ]}
          width="700.73px"
          height="571px"
          radius="4px"
          backgroundColors={["#E2E3FF", "#FFE8BC", "#FFC0BC", "#DEC699", "#E8DFCF"]}
        />
        <BuyBox 
          name={product.name}
          reference="38416711"
          rating={90}
          price={product.price}
          priceDiscount={product.priceDiscount}
          description={product.description}
        />
      </div>

      <Section
        title="Produtos relacionados"
        titleAlign="left"
        link={{ text: "Ver todos", href: "/produtos" }}
      >
        <ProductListing products={recommendedProducts} />
      </Section>
    </div>
  );
};

export default ProductViewPage;