import React from 'react';
import ProductListing from './ProductListing';

const Section = ({ title, titleAlign = "left", link, products, children }) => {
  return (
    <section style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: titleAlign === "center" ? 'center' : 'space-between', alignItems: 'center' }}>
        <h2 style={{ color: '#474747', fontSize: '24px', textAlign: titleAlign }}>{title}</h2>
        {link && (
          <a href={link.href} style={{ color: '#007bff', fontSize: '18px', textDecoration: 'none' }}>
            {link.text}
          </a>
        )}
      </div>
      {products ? (
        <ProductListing products={products} />
      ) : (
        <div>{children}</div>
      )}
    </section>
  );
};

export default Section;