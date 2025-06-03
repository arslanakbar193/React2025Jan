import React, { useContext } from 'react'
import { BioContext } from '.';

const Home = () => {
   const {myname,myage} = useContext(BioContext);
  return (
    <div>Home {myname} {myage} </div>
  )
}

export default Home;