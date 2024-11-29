import React, { useState } from 'react';

const ProductOptions = ({ options, radius = '4px', shape = 'square', type = 'text' }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const getOptionStyle = (option) => {
    let baseStyle = {
      display: 'inline-block',
      margin: '10px',
      cursor: 'pointer',
      border: selectedOption === option ? '2px solid #F59E0B' : '1px solid #D1D5DB',
      boxSizing: 'border-box',
    };

    if (shape === 'square') {
      baseStyle = { ...baseStyle, width: '46px', height: '46px', borderRadius: radius };
    } else if (shape === 'circle') {
      baseStyle = { ...baseStyle, width: '31px', height: '31px', borderRadius: '50%' };
    }

    if (type === 'text') {
      baseStyle = { ...baseStyle, fontSize: '24px', color: '#374151', lineHeight: '46px', textAlign: 'center' };
    } else if (type === 'color') {
      baseStyle = { ...baseStyle, backgroundColor: option };
    }

    return baseStyle;
  };

  return (
    <div>
      {options.map((option, index) => (
        <div
          key={index}
          style={getOptionStyle(option)}
          onClick={() => handleOptionClick(option)}
        >
          {type === 'text' ? option : null}
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;