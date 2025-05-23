import React from 'react';
import seriesData from "../api/apidata.json";
import Seriescarditems from './seriescarditems';


const SeriesCard = () => {
  return (
        <div className="container mx-auto max-w-screen-xl px-4 py-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 list-none">
                {seriesData.map((curElem) => {
                    return <Seriescarditems data={curElem} key={curElem.id}/>
                })}
            </ul>
        </div>
    )   
}



export default SeriesCard;