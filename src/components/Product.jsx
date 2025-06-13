import React from 'react';
import { NavLink } from 'react-router-dom';
import FormatPrice from '../helper/FormatPrice';

const Product = (curElem) => {
    const {id,name,image,price,category} = curElem;
  return (
    <>
    <NavLink to={`/singleproduct/${id}`}>
        <div
              key={id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6">
              <img
                src={image}
                alt={name}
                className="h-48 w-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
              <p className="text-blue-600 font-medium text-md mt-2">
                 <FormatPrice  price={price}/>
              </p>
              <p className="text-blue-600 font-medium text-md mt-2">
                {category}
              </p>
            </div>
            </NavLink>
    </>
  )
}

export default Product