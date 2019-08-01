import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header>
    <ul>
      <li><Link to="/"> <p>HSP</p> </Link></li>
      <li><Link to="/statistics"> <p>Statistics</p> </Link></li>
      <li><Link to="/quiz"> <p>Quiz</p> </Link></li>
    </ul>

  </header>
);



export default Header;
