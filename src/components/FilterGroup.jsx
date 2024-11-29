import React from 'react';

const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="filter-group">
      <h3 style={{ fontSize: '14px', color: '#474747' }}>{title}</h3>

      {options.map((option, index) => (
        <label key={index} style={{ display: 'flex', alignItems: 'center', color: '#474747', margin: '8px 0' }}>
          <input
            type={inputType}
            value={option.value || option.text}
            style={{
              width: '22px',
              height: '22px',
              backgroundColor: 'var(--primary)',
              marginRight: '8px'
            }}
          />
          <span>{option.text}</span>
        </label>
      ))}
    </div>
  );
};

export default FilterGroup;
