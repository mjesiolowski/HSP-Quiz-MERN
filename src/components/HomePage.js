import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <header className="header">
      <div className="header__content">
        <h1 className="title">Am I an HSP?</h1>
        <p className="text">
          Have you ever been told to overreacting or being "too sensitive"?
      </p>
        <p className="text">
          Do you get this feeling that your senses are constantly stimulated?
      </p>
        {/* <p className="text">
        Do you worship your downtime as if it was the best part of your day?
      </p> */}
        <p className="text">
          Do loud music and crowded places make you get irritated and overwhlemed, but at the same time you enjoy the company of your friends?
      </p>
        <p className="text">
          Do you get this feeling that everyone around has much more energy that you?
    </p>
        {/* <p className="text">
        ...and this sudden "I need it now" request from you boss that ruins your well-planned schedule.
      </p> */}
        <p className="text">
          <strong>You are probably a Highly Sensitive Person</strong>, as 15-20% people on this planet.
      </p>

        <div className="header__links">
          <Link className="header__link link button" to="/faq">I want to know more</Link>
          <Link className="header__link link button" to="/quiz">Take the quiz</Link>
        </div>
      </div>
    </header>
  )
}

export default HomePage;
