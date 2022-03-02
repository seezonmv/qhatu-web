import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import ShoppingCartStl from './ShoppingCartStl';
import ProductService from '../../core/services/ProductService';
import PurchaseService from '../../core/services/PurchaseService';
import TokenService from '../../core/services/TokenService';

const ShoppingCartStf = () => {
  const refPaymentMethod = useRef(null);
  const refComment = useRef(null);
  const [myOrder, setMyOrder] = useState({
    items: [],
    total: 0,
  });

  const shoppingCart = useSelector((state) => state.shoppingCart);

  const getOrder = async () => {
    let arrayProducts = [];
    for (let index = 0; index < shoppingCart.length; index++) {
      const productId = shoppingCart[index]['id'];
      const productResponse = await ProductService.getById(productId);
      if (productResponse.success) {
        arrayProducts.push(productResponse.data);
      }
      shoppingCart[index]['total'] =
        parseFloat(shoppingCart[index]['quantity']) *
        parseFloat(productResponse.data.salePrice);
    }
    console.log(shoppingCart);
    setMyOrder({
      ...myOrder,
      items: arrayProducts,
    });
  };

  const savePurchase = async () => {
    const paymentMethod = refPaymentMethod.current?.value;
    const comment = refComment.current?.value;
    if (paymentMethod && comment) {
      const objPurchase = {
        customerId: TokenService.getUserId,
        paymentMethod: paymentMethod,
        comment: comment,
        purchaseDet: shoppingCart,
      };
      const responsePurchase = await PurchaseService.add(objPurchase);
      //console.log(responsePurchase);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);
  return myOrder.items.length > 0 ? (
    <ShoppingCartStl
      products={myOrder.items}
      refPaymentMethod={refPaymentMethod}
      refComment={refComment}
      savePurchase={savePurchase}
    />
  ) : (
    <h1>Cargando...</h1>
  );
};

export default ShoppingCartStf;
