import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.webp'
import IMG2 from '../../assets/portfolio2.webp'
import IMG3 from '../../assets/portfolio3.webp'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container port__container">
        <article className="port__item">
          <div className="port__item-image">
            <img src={IMG1} alt="image" />
          </div>
          <h3>Online Order Food Website</h3>
          <div className="port__item-cta">
          <a href="https://github.com/digvijaysinghdhanta/Food-Website.git" className='btn' target='_blank'>Github</a>
          <a href="https://digvijaysinghdhanta.github.io/Food-Website/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="port__item">
          <div className="port__item-image">
            <img src={IMG2} alt="image" />
          </div>
          <h3>Web chat app</h3>
          <div className="port__item-cta">
          <a href="https://github.com/digvijaysinghdhanta/chitchat.git" className='btn' target='_blank'>Github</a>
          <a href="https://chiitchats.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="port__item">
          <div className="port__item-image">
            <img src={IMG3} alt="image" />
          </div>
          <h3>This is a hostel based project</h3>
          <div className="port__item-cta">
          <a href="https://github.com/digvijaysinghdhanta/hostel.git" className='btn' target='_blank'>Github</a>
          <a href="https://digvijaysinghdhanta.github.io/hostel/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        {/* <article className="port__item">
          <div className="port__item-image">
            <img src={IMG4} alt="image" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="port__item-cta">
          <a href="" className='btn' target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="port__item">
          <div className="port__item-image">
            <img src={IMG5} alt="image" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="port__item-cta">
          <a href="" className='btn' target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio
