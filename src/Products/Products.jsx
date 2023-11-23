import React, { useState } from 'react';
import './Products.css';
import ProductData from '../Product-data/ProductData';

function Products() {
  const [items, setItems] = useState(ProductData);

  const AddValue = (productId) => {
    setItems(items.map((item) =>
      item.id === productId ? { ...item, qty: item.qty + 1 } : item
    ))
  }
  const Decreasing = (productId) => {
    setItems(items.map((item) =>
      item.id === productId ? { ...item, qty: item.qty - 1 } : item
    ));
  }
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          {items.map((product) => (
            <div key={product.id} className="col-12 col-md-3 col-lg-3">
              <div className="card mx-auto mt-4" style={{ width: '15rem' }}>
                <img
                  className="card-img-top"
                  src={product.image}
                  alt="Card image cap"
                  style={{ height: '190px' }}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{product.model}</h5>
                  <p className="card-title text-dark text-center">{product.spec}</p>
                  <p className="text-center">{product.qty}</p>
                  <div className="text-center">
                    <a
                      href="#"
                      className="btn btn-primary"
                      onClick={() => AddValue(product.id)}
                    >
                      +
                    </a>
                    <a
                      href="#"
                      className="btn btn-primary"
                      onClick={() => Decreasing(product.id)}
                    >
                      -
                    </a>
                  </div>
                  <div className="text-center mt-3">
                    <a href="#" className="btn btn-primary text-center">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
