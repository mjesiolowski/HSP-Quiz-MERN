import React, { useState } from 'react';
import FAQContent from './FAQContent'

const FAQ = () => {

  const [contentState, setContentState] = useState('What is HSP?')

  const handleClick = (e) => {
    setContentState(e.target.textContent)
  }



  return (
    <div id="FAQ">
      <h2>FAQ content</h2>
      <ol>
        <li onClick={(e) => handleClick(e)}>What is HSP?</li>
        <li onClick={(e) => handleClick(e)}>3 Things You Need to Know About Highly Sensitive People</li>
        <li onClick={(e) => handleClick(e)}>4 Science-Based Traits That Define a Highly Sensitive Person</li>
      </ol>
      <FAQContent content={contentState} />
    </div>
  )
}


export default FAQ;
