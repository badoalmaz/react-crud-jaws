import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ products, deleteProduct, handleEdit }) => {
  return (
    <div>
      <center>
        <h2>Products</h2>
      </center>

      <div className="d-flex justify-content-evenly flex-wrap">
        {products.map((item) => (
          <ProductCard
            item={item}
            key={item.id}
            deleteProduct={deleteProduct}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
