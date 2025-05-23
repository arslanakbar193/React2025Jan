const Seriescarditems = ({data}) => {
  console.log(data)
  const {id,thumbnail,title,genres,rating,available,release_year,creators,cast} = data;
  return (
    <>
       
      <li>
        <div key={id} style={{ border: "1px solid #ccc", margin: "0rem", padding: "1rem" }} className="w-full  object-cover rounded-md mb-4">
          <img src={thumbnail} alt={title} style={{ width: "100%",height:"400px" }} className="object-cover rounded-md mb-2"/>
          <h1 className="text-xl font-bold text-gray-800 mb-1">{title}</h1>
          <h2  className="text-sm text-gray-600 mb-1">{genres.join(" , ")}</h2>
          <h3 className="text-sm text-yellow-500 font-semibold mb-2">{rating}</h3>
          <h3 className="text-sm text-gray-600 mb-2">{cast.join(" , ")}</h3>
          <h3 className="text-sm text-gray-600 mb-2">{creators}</h3>
          <p className="text-gray-700 text-sm mb-4">{release_year}</p>
          {/* <button >{available ? "Available" : "Unavailable"}</button> */}
          <button className={`cursor-pointer px-4 py-2 text-white rounded-lg font-medium ${available ? "bg-green-500 hover:bg-green-600 " : "bg-red-400 cursor-not-allowed"}`}>
            {available ? "Available" : "Unavailable"}
          </button>
        </div>
      </li>
           
   
    </>
  )
}

export default Seriescarditems