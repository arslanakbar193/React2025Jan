import React from 'react';
import HeroSection from './HeroSection';

const About = () => {
  const data = {
    name:"E-commerce Store"
  }
  return (
    <div><HeroSection  mydata={data}/></div>
  )
}

export default About;