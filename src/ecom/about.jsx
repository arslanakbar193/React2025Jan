import React from 'react';
import HeroSection from './HeroSection';
import { useContext } from 'react';
import { AppContext } from './ProductContext';

const About = () => {
  const myname = useContext(AppContext);
  const data = {
    name:"E-commerce Store"
  }
  return (
    <div><HeroSection  mydata={data}/></div>
  )
}

export default About;
