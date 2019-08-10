import React from 'react';
import { Link } from 'react-router-dom'
import { FAQContentTexts } from '../texts/content'

const FAQContent = ({ content }) => {

  const setContent = (content) => {

    switch (content) {
      case 'What is HSP?':
        return FAQContentTexts[0]
      case '3 Things You Need to Know About Highly Sensitive People':
        return FAQContentTexts[1]
      case '4 Science-Based Traits That Define a Highly Sensitive Person':
        return FAQContentTexts[2]
    }
  }

  return (
    <>
      <div className="FAQ__text"><p className="text">{setContent(content)}</p></div>
      <div className="buttons buttons--vertical">
        <Link
          className="FAQ__button link button"
          to="/"
        >Return</Link>
        <Link
          className="FAQ__button link button"
          to={'/faq/' + content.replace(/\s+/g, '_')}
        >Details</Link>
      </div>
    </>
  )
}

export default FAQContent;
