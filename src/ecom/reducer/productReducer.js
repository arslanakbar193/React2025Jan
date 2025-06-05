import React from 'react';

const ProductReducer = (state,action) => {
    if (action.type === "SET_LOADING"){
        return {
            ...state,
            isLoading:true
        };
    }
    if (action.type === "API_ERROR"){
        return {
            ...state,
            isLoading:false,
            isError:true
        };
    }
    if (action.type === "SET_API_DATA"){
        const featureData = action.payload.filter((cur) => {
            return cur.featured === true;
        })
        return {
            ...state,
            isLoading:false,
            products:action.payload,
            featureProducts:featureData,
        };
    }
  return state;
}

export default ProductReducer;