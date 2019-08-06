import React from 'react';
import FAQ from './FAQ'

const HomePage = () => (
  <>
    <header className="header">
      <h1>Am I an HSP?</h1>
      <p>
        Have you ever been told to overreacting or being "too sensitive"?
      </p>
      <p>
        Do you get this feeling that your senses are constantly stimulated?
      </p>
      <p>
        Do you worship your downtime as if it was the best part of your day?
      </p>
      <p>
        Do loud music and crowded places make you get irritated and overwhlemed, but at the same time you enjoy the company of your friends?
      </p>
      <p>
        Do you get this feeling that everyone around has much more energy that you?
    </p>
      <p>
        ...and this sudden "I need it now" request from you boss that ruins your well-planned schedule.
      </p>

      <p>
        You are probably a Highly Sensitive Person, as 15-20% people on this planet.
      </p>
    </header>
    <div>
      <FAQ />
    </div>
  </>
);

export default HomePage;
