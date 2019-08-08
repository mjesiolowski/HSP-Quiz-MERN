import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const toggleMenuVisibility = () => {
    const menu = document.querySelector('.nav__list')
    menu.classList.toggle('nav__list--hidden')
  }

  return (
    <nav className="nav">
      <div className="nav__hamburger">
        <button onClick={toggleMenuVisibility} className="nav__button"><i className="fas fa-bars nav__icon"></i></button>
      </div>

      <ul className="nav__list nav__list--hidden">
        <li onClick={toggleMenuVisibility} className="nav__item"><Link className="link" to="/"> <p><i className="fas fa-home"></i></p> </Link></li>
        <li onClick={toggleMenuVisibility} className="nav__item"><Link className="link" to="/faq"> <p>FAQ</p> </Link></li>
        <li onClick={toggleMenuVisibility} className="nav__item"><Link className="link" to="/statistics"> <p>Statistics</p> </Link></li>
        <li onClick={toggleMenuVisibility} className="nav__item"><Link className="link" to="/quiz"> <p>Quiz</p></Link></li>
      </ul>
    </nav>
  );
}


export default Nav;
