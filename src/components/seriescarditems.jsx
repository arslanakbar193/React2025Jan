import React from 'react'

const Seriescarditems = (props) => {
  return (
    <>
        <>
           <li>
                <div key={props.curElem.id} style={{ border: "1px solid #ccc", margin: "1rem", padding: "1rem" }}>
                <img src={props.curElem.thumbnail} alt={props.curElem.title} style={{ width: "200px" }} />
                <h1>{props.curElem.title}</h1>
                <h2>{props.curElem.genres.join(", ")}</h2>
                <h3>{props.curElem.rating}</h3>
                <p>{props.curElem.description}</p>
                <button>{props.curElem.available ? "Available" : "Unavailable"}</button>
                </div>
            </li>
           
    </>
    </>
  )
}

export default Seriescarditems