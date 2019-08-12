import React, { useEffect, useState } from 'react';
import FAQContent from './FAQContent'

const FAQInfo = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [contentState])

  const [contentState, setContentState] = useState('What is HSP?')

  const handleClick = (e) => {
    const activeElement = e.target
    const activeElements = document.querySelectorAll('.FAQ__item')

    removeActiveClass(activeElements)
    addActiveClass(activeElement)
    setContentState(e.target.textContent)
  }

  const removeActiveClass = (elements) => {
    elements.forEach((element) => element.classList.remove('FAQ__item--active'))
  }

  const addActiveClass = (element) => {
    element.classList.add('FAQ__item--active')
  }


  return (
    <section className="FAQ">

      <div className="FAQ__content">
        <ol className="FAQ__list">
          <h2 className="title">About HSP</h2>
          <li className="FAQ__item FAQ__item--active text" onClick={(e) => handleClick(e)}>What is HSP?</li>
          <li className="FAQ__item text" onClick={(e) => handleClick(e)}>3 Things You Need to Know About Highly Sensitive People</li>
          <li className="FAQ__item text" onClick={(e) => handleClick(e)}>4 Science-Based Traits That Define a Highly Sensitive Person</li>
        </ol>

        <FAQContent content={contentState} />
      </div>
    </section>
  )
}


export default FAQInfo;
