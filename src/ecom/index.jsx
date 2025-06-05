import React from 'react';
import HeroSection from './HeroSection';
import Services from './Services';
import Trusted from './Trusted';
import FeatureProducts from './FeatureProducts';

const ReactEcom = () => {
  const data = {
    name:"Shop Mate"
  }
  return (
    <div>
      <HeroSection mydata={data}/>
      <Services/>
      <Trusted/>
      <FeatureProducts/>
    </div>
  )
}

export default ReactEcom