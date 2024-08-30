import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Main Site</Link></li>
          <li><Link to="/admin">Admin Dashboard</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
