import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title title">Am I an HSP?</h1>
        <p className="header__text text">
          Have you ever been told to overreacting or being "too sensitive"?
      </p>
        <p className="header__text text">
          Do you get this feeling that your senses are constantly stimulated?
      </p>
        <p className="header__text text">
          Do loud music and crowded places make you get irritated and overwhlemed, but at the same time you enjoy the company of your friends?
      </p>
        <p className="header__text text">
          Does it fell like everyone around you has much more energy that you?
    </p>
        <p className="header__text text">
          <strong>You are probably a Highly Sensitive Person (HSP)</strong>, as 15-20% people on this planet.
      </p>
      </div>

      <div className="buttons">
        <Link className="header__button link button" to="/faq">Wanna know more</Link>
        <Link className="header__button link button" to="/quiz">Take the quiz</Link>
      </div>
    </header>
  )
}

export default HomePage;
