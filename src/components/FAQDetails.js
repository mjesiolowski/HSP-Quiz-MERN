import React from 'react';
import { Link } from 'react-router-dom'

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
            <a href="https://highlysensitiverefuge.com/what-is-highly-sensitive-person/" target='_blank' rel="noopener noreferrer">Source</a>
          </>
        )

      case '3_Things_You_Need_to_Know_About_Highly_Sensitive_People':
        return (
          <>
            <p>Here are three simple, important facts everyone should know about highly sensitive people:</p>
            <ul>
              <li><strong>Being highly sensitive is a normal trait. </strong>Approximately 15 to 20 percent of the population has the gene that makes them highly sensitive.</li>
              <li><strong>High sensitivity is a real, research-based characteristic. </strong>In psychology, anyone who tests as having a very high degree of Sensory Processing Sensitivity (SPS), a personality trait, is considered highly sensitive. SPS is the trait of deeply processing experiences and stimuli, and a person with high SPS has differences at the neural level.</li>
              <li><strong>Being highly sensitive comes with both advantages and drawbacks. </strong>Highly sensitive people tend to be empathetic, artistically creative, intuitive, and highly aware of the needs of others — so much so that many thrive in careers as therapists, counsellors, artists, musicians, and writers. But highly sensitive people also deal with overwhelm, exhaustion, and burnout, especially from “absorbing” or sensing all the emotional cues of the people around them. Loud, crowded, or visually busy spaces can also overwhelm sensitive people — any strong sensory input can.</li>
            </ul>
            <p>Because of their need to spend time alone, highly sensitive people are often confused with introverts. The truth is that anyone can be highly sensitive, whether introverted, extroverted, or anywhere in between.</p>
            <a href="https://highlysensitiverefuge.com/what-is-highly-sensitive-person/" target='_blank' rel="noopener noreferrer">Source</a>
          </>
        )

      case '4_Science-Based_Traits_That_Define_a_Highly_Sensitive_Person':
        return (
          <>
            <p>If you’ve often been told that you feel things “too” deeply, are “too” sensitive, or that you “feel too much,” you’re likely a highly sensitive person. (The truth is, you aren’t “too” much of anything. You simply have a very unique and powerful personality trait that comes with both pros and cons.) But to be sure, it helps to understand the traits of a highly sensitive person — and see which ones you experience yourself.</p>

            <p>Luckily, those traits have been well-studied in both humans and animals for more than 20 years. It appears that the many of the experiences shared by HSPs boil down to just a few foundational traits. These traits were <a href="http://psycnet.apa.org/record/1997-05290-010" target="_blank" rel="noopener noreferrer">originally documented</a> by Dr. Elaine Aron, and have been expanded and <a href="https://www.researchgate.net/publication/319974199_Environmental_Sensitivity_in_Children_Development_of_the_Highly_Sensitive_Child_Scale_and_Identification_of_Sensitivity_Groups" target="_blank" rel="noopener noreferrer">verified</a> by other researchers.</p>

            <p>Today, Dr. Aron focuses on four main traits that define a highly sensitive person, represented by the acronym D.O.E.S.:</p>

            <h3>Depth of Processing</h3>

            <p>HSPs tend to process information more deeply than others. For example, if someone tells an HSP their address, the HSP may mentally repeat it over and over, or compare the street name to other similar-sounding words andd names. They may notice a metaphorical connection between the street name and other ideas.</p>

            <p>This has a practical use — it means they are very unlikely to forget the address — and it’s also part of what makes HSPs so artistically creative. But it also means that their nervous system is processing every piece of information over and over, often magnifying it. This is the foundational trait of highly sensitive people, and it’s what gives HSPs a sense of “burnout” or overload. Which brings us to…</p>

            <h3>Overstimulation</h3>

            <p>Processing every little detail, all the time, is exhausting. Since an HSP will take in and think about details that most people never even notice, they are de facto performing more cognitive work than the average person — all day long. Thus, it’s only natural that an HSP will feel exhausted in situations where others feel fine.</p>

            <p>Examples include being able to only plan one or two things in a day of travel, not a packed itinerary; wanting a moment of quiet, without conversation, when others want to keep talking; or wishing to go to a low-key, chill environment rather than a busy restaurant or high-energy club. HSPs can handle high-stimulus environments, but only for shorter periods, and only if they come into them “fresh” for the day.</p>


            <h3>Empathy (or Emotional Reactivity)</h3>

            <p><strong>Emotional reactivity&nbsp;</strong>means that HSPs have a stronger reaction to both positive and negative experiences. However, <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4086365/" target="_blank" rel="noopener noreferrer">research has shown</a> that this effect is particularly pronounced in relation to&nbsp;<em>positive&nbsp;</em>experiences — or even pictures of a positive event. Positive settings help rocket HSPs into not only a good emotional state, but better creativity and thinking as well. This may be part of the reason most HSPs seek to create a private refuge (which they often want no one else to enter) where they can control their surroundings and create the atmosphere they need.</p>

            <p><strong>Empathy&nbsp;</strong>means just that: HSPs are more aware of the emotions of others, they think about what others needs, and they are concerned with helping others. The brain of a highly sensitive person reacts more strongly to images of other people’s faces showing emotion, and their “mirror neurons” — the part of the brain that helps us understand and empathize with the emotions of others — are particularly active.</p>

            <p>For an HSP, the experience of empathy is not just “understanding” someone’s emotions. Many HSPs feel that they absorb emotions even when someone isn’t visibly expressing them, or pick up on emotions from <em>places</em> as well as <em>people</em>.</p>

            <h3>Sensitivity to Subtleties</h3>

            <p>HSPs are naturals when it comes to picking up on subtle cues or stimuli that others miss. This doesn’t mean they have super-hearing or vision; it’s simply what happens when the nervous system is wired to process every sense impression deeply. The result is that HSPs will notice small sounds, tiny distractions, smells, or tastes that others don’t seem to even be aware of. (This can feed into being overstimulated, since most workplaces are designed for people who aren’t distracted or bothered by such “tiny” details!)</p>

            <p>You may identify with some of these traits more than others. But if you found yourself nodding along with most of them, there’s a good chance you’re a highly sensitive person.</p>
            <a href="https://highlysensitiverefuge.com/what-is-highly-sensitive-person/" target='_blank' rel="noopener noreferrer">Source</a>
          </>
        )
    }
  }
  return (
    <div>
      <h2>FAQDetails content</h2>
      {setContent(match.params.id)}
      <Link to='/'>Return</Link>
    </div>
  )
}

export default FAQDetails;
