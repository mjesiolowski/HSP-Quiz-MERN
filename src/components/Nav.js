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
        <li onClick={toggleMenuVisibility} className="nav__item"><Link className="link nav__link" to="/"> <p className="nav__text"><i className="fas fa-home"></i></p> </Link></li>
        <li onClick={toggleMenuVisibility} className="nav__item"><Link className="link nav__link" to="/faq"> <p className="nav__text">About HSP</p> </Link></li>
        <li onClick={toggleMenuVisibility} className="nav__item"><Link className="link nav__link" to="/statistics"> <p className="nav__text">Statistics</p> </Link></li>
        <li onClick={toggleMenuVisibility} className="nav__item"><Link className="link nav__link" to="/quiz"> <p className="nav__text">Quiz</p></Link></li>
      </ul>
    </nav>
  );
}


export default Nav;
