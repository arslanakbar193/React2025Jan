import React from 'react';
import seriesData from "../api/apidata.json";
import Seriescarditems from './seriescarditems';


const SeriesCard = () => {
  return (
        <ul>
            {seriesData.map((curElem) => {
                return <Seriescarditems curElem={curElem} key={curElem.id}/>
            })}
        </ul>
    )   
}



export default SeriesCard;