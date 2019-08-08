import React, { useEffect, useState } from 'react';

const Footer = () => {

  const [date, setDate] = useState(new Date().getFullYear())

  useEffect(() => {
    setDate(new Date().getFullYear())
  }, [])


  return (
    <footer className="footer" >
      <section className="footer__sources">
        <h2 className="footer__title">Sources</h2>
        <a className="footer__link link" href="https://highlysensitiverefuge.com/highly-sensitive-person-signs/"
          target="_blank" rel="noopener" aria-label="Navigate to highlysensitiverefuge.com">highlysensitiverefuge.com/highly-sensitive-person-signs</a>
        <a className="footer__link link" href="https://highlysensitiverefuge.com/what-is-highly-sensitive-person/"
          target="_blank" rel="noopener" aria-label="Navigate to highlysensitiverefuge.com">highlysensitiverefuge.com/what-is-highly-sensitive-person</a>
        <a className="footer__link link" href="https://hsperson.com/test/highly-sensitive-test/"
          target="_blank" rel="noopener" aria-label="Navigate to highlysensitiverefuge.com">hsperson.com/test/highly-sensitive-test</a>
      </section>
      <section className="footer__author-info">
        <h2 className="footer__title">Author</h2>
        <p className="footer__link">© {date} by <a className="footer__link link" href="https://mjesiolowski.pl"
          target="_blank" rel="noopener" aria-label="Author's webpage">
          mjesiolowski.pl</a></p>
      </section>

    </footer>
  );
}

export default Footer;




