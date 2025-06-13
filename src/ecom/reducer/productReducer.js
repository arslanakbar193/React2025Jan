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
    if (action.type === "SET_SINGLELOADING"){
            return {
                ...state,
                isSingleLoading:true,
            };
        }

        if (action.type === "SET_SINGLEPRODUCT"){
           return {
                ...state,
                isSingleLoading:false,
                singleProduct:action.payload,
            };
        }

        if (action.type === "SET_SINGLEERROR"){
        return {
            ...state,
            isSingleLoading:false,
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