# HSP

https://mj-hsp.herokuapp.com/

## About the website:
The HSP website is meant to get you acquainted with a Highly Sensitive Person background, as I believe that only a small percentage of people are aware of the term existence.
My goal was to contribute to the growth of the HSP issue awareness.

## Content
There are four main sections to navigate to:
- \ - Home Page - you can find here some introduction, as well as the navigation buttons to further sections
- \faq - About HSP - the knowledge section with three the most important topics related to HSP
- \quiz - Quiz section - you can start the 20 questions quiz here
- \statistics - quiz summary

## The biggest challenge
There was a couple:
- first of all, it was my first attempt to create a website with both front-end and back-end built from scratch
- routing - I implemented private routes, so that it is not possible to get access to certain areas of the website without correct validation
- quiz logic - the quiz consists of two sets of questions (pro-HSP and anti-HSP) - it is crucial to compute points correctly, having in mind the sets' length and diversity
- modifiable content - my intention was to make the code easy to modify, meaning you can manipulate the sets number\length without changing the code structure; furthermore, you can easily modify variables with HSP score treshold, the highest possible score or questions per page

## Technology used:
React (with React Router and React Hooks),
Redux,
SASS + BEM,
Node.js (Express),
MongoDB (Mongoose)
Webpack,
Heroku platform



