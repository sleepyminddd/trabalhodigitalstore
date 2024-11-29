import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      navigate(`/products?search=${searchTerm}`);
    }
  };

  return (
    <header style={{ backgroundColor: '#FFFFFF', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <div className="logo">
          <img src="src/assets/logo-header.svg" alt="Logo" style={{ height: '44px', width: '253px', top: '42px', left: '104px' }} />
        </div>
        <div className="search" style={{ position: 'relative', width: '559px', height: '60px', marginLeft: '20px', flexGrow: 1 }}>
  <input
    type="text"
    placeholder="Pesquisar produto..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    onKeyDown={handleSearch}
    style={{
      width: '100%',
      height: '100%',
      paddingRight: '45px',
      borderRadius: '8px',
      color: '#666666',
      backgroundColor: 'rgba(71, 71, 71, 0.04)',
      border: '1px solid #CCC',
      outline: 'none',
      boxSizing: 'border-box',
    }}
  />
  <button 
    onClick={handleSearch} 
    style={{
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <img src="src/assets/Search.svg" alt="Buscar" style={{ width: '24px', height: '24px' }} />
  </button>
</div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
          <Link to="/register" style={{ color: '#6B7280', fontSize: '16px', textDecoration: 'underline', marginRight: '15px' }}>Cadastre-se</Link>
          <Link to="/login" style={{
            backgroundColor: '#C92071', 
            width: '114px', 
            height: '40px', 
            borderRadius: '4px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: 'white', 
            fontWeight: 'bold', 
            fontSize: '14px', 
            textDecoration: 'none'
          }}>
            Entrar
          </Link>
          <img src="src/assets/Buy.svg" alt="Carrinho" style={{ marginLeft: '15px', height: '24px' }} />
        </div>
      </div>
      <nav>
  <ul style={{ listStyleType: 'none', display: 'flex', margin: '10px 0 0 0', padding: 0, }}>
    {['Home', 'Produtos', 'Categorias', 'Meus Pedidos'].map((item, index) => (
      <li style={{ margin: '0 15px', position: 'relative' }} key={index}>
        <Link
          to={`/${item.toLowerCase().replace(" ", "")}`}
          style={{ color: '#474747', textDecoration: 'none' }}
          onMouseEnter={(e) => { e.target.style.color = '#C92071'; e.target.parentNode.querySelector('span').style.opacity = '1'; }}
          onMouseLeave={(e) => { e.target.style.color = '#474747'; e.target.parentNode.querySelector('span').style.opacity = '0'; }}
        >
          {item}
        </Link>
        <span
          style={{
            position: 'absolute',
            width: '49px',
            height: '2px',
            backgroundColor: '#C92071',
            borderRadius: '2px 0 0 0',
            opacity: '0',
            bottom: '-4px',
            left: 'calc(50% - 24.5px)',
            transition: 'opacity 0.3s ease',
          }}
        />
      </li>
    ))}
  </ul>
</nav>

    </header>
  );
};

export default Header;