import React, { useEffect, useState } from 'react';
import instance from '../../axios/instance';
import CardLoader from '../../components/loader/CardLoader';

const Purchases = () => {
  const [products, setProducts] = useState({
    loading: true,
    data: undefined,
  });
  const getProducts = async () => {
    try {
      setProducts({ loading: true });
      const products = await instance.get('/gtw-prd/products/getAll');
      setProducts({ loading: false, data: products.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Compras</h1>
      </div>
      {products.loading ? (
        <CardLoader />
      ) : (
        <>
          <div className="row row-cols-md-2">
            {products.data.map((product) => {
              return (
                <div
                  key={product.id}
                  className="card mb-3"
                  style={{ marginRight: '10px', width: '540px' }}
                >
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        style={{ marginLeft: '-12px' }}
                        src={product.imageUrl}
                        alt="Character"
                        className="bd-placeholder-img"
                        height="200"
                        width="200"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">
                          {product.category.name}
                          <br />
                          {product.sku}
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            S/. {product.salePrice}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Purchases;
