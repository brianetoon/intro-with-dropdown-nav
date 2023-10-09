import React from 'react';
import heroMobile from '../assets/images/hero/image-hero-mobile.png';
import heroDesktop from '../assets/images/hero/image-hero-desktop.png';
import Clients from './Clients';

const Hero = () => {
  return (
    <section className="hero | container flow" data-type="wide">
      
      <picture className="hero__image">
        <source media="(min-width: 768px)" srcSet={heroDesktop} alt="A young man in white t-shirt holding a laptop." />
        <img className="width-100" src={heroMobile} alt="A young man in white t-shirt holding a laptop." />
      </picture>
      
      <div className="hero__intro | flow">
        <div className="hero__intro-text | flow">
          <h1 className="heading-1">Make <span>remote work</span></h1>
          <p>Get your team in sync, no matter  your location. Streamline processes, create team rituals and watch productivity soar.</p>
          <button className="button">Learn more</button>
        </div>

        <Clients />
      </div>
    </section>
  );
}

export default Hero;
