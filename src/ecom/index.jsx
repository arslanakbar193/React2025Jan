import React from 'react';
import HeroSection from './HeroSection';
import Services from './Services';
import Trusted from './Trusted';

const ReactEcom = () => {
  const data = {
    name:"Shop Mate"
  }
  return (
    <div>
      <HeroSection mydata={data}/>
      <Services/>
      <Trusted/>
    </div>
  )
}

export default ReactEcom