import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo-footer.svg';
import FacebookIcon from '../assets/facebook.svg';
import InstagramIcon from '../assets/instagram.svg';
import TwitterIcon from '../assets/twitter.svg';

const Footer = () => {
  const informations = [
    { text: 'Sobre Drip Store', link: '/about' },
    { text: 'Blog', link: '/blog' },
    { text: 'Termos de uso', link: '/terms' },
    { text: 'Política de Privacidade', link: '/privacy' }
  ];

  return (
    <footer style={{ backgroundColor: '#1F1F1F', color: 'white', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <img src={Logo} alt="Logo Footer" style={{ width: '200px' }} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div style={{ display: 'flex', gap: '16px', marginTop: '10px' }}>
            <a href="https://facebook.com" aria-label="Facebook">
              <img src={FacebookIcon} alt="Facebook" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <img src={InstagramIcon} alt="Instagram" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <img src={TwitterIcon} alt="Twitter" style={{ width: '24px', height: '24px' }} />
            </a>
          </div>
        </div>

        <div style={{ marginLeft: 'auto' }}>
          <h4>Informações</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {informations.map((info, index) => (
              <li key={index} style={{ marginBottom: '8px' }}>
                <Link to={info.link} style={{ color: 'white', textDecoration: 'none' }}>
                  {info.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr />
      <p style={{ textAlign: 'center' }}>© 2024 Digital Store</p>
    </footer>
  );
};

export default Footer;