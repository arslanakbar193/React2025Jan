import React, { useContext } from 'react';
import { AppContext } from './ProductContext';

import Product from '../components/Product';

const FeatureProducts = () => {
  const { isLoading, featureProducts } = useContext(AppContext);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Featured Products
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {featureProducts.map((product) => {
              return <Product key={product.id} {...product}/>
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureProducts;
