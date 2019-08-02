import React from 'react';


const FAQDetails = ({ match }) => {

  const setContent = (content) => {
    switch (content) {
      case 'What_is_HSP':
        return (
          <>
            <h2>What Is a Highly Sensitive Person?</h2>
            <p><em>The definition of a highly sensitive person is someone who experiences acute physical, mental, or emotional responses to stimuli. </em></p>
            <p>This can include external stimuli, like your surroundings and the people you’re with, or internal stimuli, like your own thoughts, emotions and realizations.</p>
            <p>While everyone feels sensitive at times, and everyone reacts to stimuli to some degree, being a highly sensitive person means you experience a much greater response — so much so that it can seem overwhelming. Many highly sensitive people need to excuse themselves from high-stimulus environments, often having a “refuge” where they can be alone and “ground” their reactions.</p>
            <p><strong>Tip:</strong>If you’re thinking, “That’s nothing special. Everyone feels that way sometimes!” <em>…you are likely not a highly sensitive person.</em></p>
            <p>Highly sensitive people know from long experience that they feel things far more strongly than others do. They have seen firsthand how they’re different.</p>
            <p>Often, it’s also noticed and remarked on by others, with comments like, “You noticed that?” “Why does that bother you?” “I dunno, it doesn’t seem loud/cold/hot to me…” or “You’re too sensitive.”</p>
            <a href="https://highlysensitiverefuge.com/what-is-highly-sensitive-person/">Source</a>
          </>
        )

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
      <h2>FAQDetails content</h2>
      {setContent(match.params.id)}
    </div>
  )
}

export default FAQDetails;
