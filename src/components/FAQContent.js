import React from 'react';
import { Link } from 'react-router-dom'

const FAQContent = ({ content }) => {


  const setContent = (content) => {

    switch (content) {
      case 'What is HSP?':
        return 'The definition of a highly sensitive person is someone who experiences acute physical, mental, or emotional responses to stimuli. This can include external stimuli, like your surroundings and the people you’re with, or internal stimuli, like your own thoughts, emotions and realizations.'
      case '3 Things You Need to Know About Highly Sensitive People':
        return '“The truth is, you aren’t ‘too’ much of anything. You simply have a very unique and powerful personality trait that comes with both pros and cons.”'
      case '4 Science-Based Traits That Define a Highly Sensitive Person':
        return 'If you’ve often been told that you feel things “too” deeply, are “too” sensitive, or that you “feel too much,” you’re likely a highly sensitive person. But to be sure, it helps to understand the traits of a highly sensitive person — and see which ones you experience yourself.'
      case '21 Signs That You’re a Highly Sensitive Person by Jenn Granneman':
        return 'A highly sensitive person (HSP) experiences the world differently than others. Due to a biological difference that they’re born with, highly sensitive people are more aware of subtleties and process information deeply. This means they tend to be creative, insightful, and empathetic, but it also means they’re more prone than others to stress and overwhelm. Here you can find the list of 21 traits oh HSP.'
    }
  }

  return (
    <div>
      <p>{setContent(content)}</p>
      <Link to={'/content/' + content.replace(/\s+/g, '_')}>Details</Link>
    </div>
  )
}

export default FAQContent;
