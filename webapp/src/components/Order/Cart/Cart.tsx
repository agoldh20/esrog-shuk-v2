import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { LineItemType } from '../../../slices/lineItemsSlice/lineItemsSlice';
import { CartProps } from './CartProps';
import LineItemTile from './LineItem/LineItemTile';
import './Cart.scss';
import { sendLineItemsAction } from '../../../actions/sendLineItemsAction';
import { useNavigate } from 'react-router';

const Cart: FC<CartProps> = ({ orderId, items }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lineItems = useSelector<RootState, LineItemType[]>(state => state.lineItems);
  const { esrogs, extras, grades, lulavs, hadasims, aravots } = items;

  const handleClick = () => {
    dispatch(sendLineItemsAction(navigate, orderId, lineItems))
  }

  const cartedEsrogs = lineItems.filter(esrog => esrog.esrogId);
  const cartedLulavs = lineItems.filter(lulav => lulav.lulavId);
  const cartedHadasim = lineItems.filter(hadasim => hadasim.hadasimId);
  const cartedAravos = lineItems.filter(aravos => aravos.aravotId);
  const cartedExtras = lineItems.filter(extra => extra.extraId);

  const total = lineItems
    .map(lineItem => lineItem.lineTotal)
    .reduce((accumulator, currentValue) => {
      return accumulator! + currentValue!;
    }, 0);

  return (
    <>
      {lineItems.length ? (
        <div className="card cart">
          <div className="card-header">
            <b>Cart</b>
          </div>
          <div className="card-body">
            <LineItemTile type="esrog" items={esrogs} cartedItems={cartedEsrogs} />
            <LineItemTile type="lulav" items={lulavs} cartedItems={cartedLulavs} />
            <LineItemTile type="hadasim" items={hadasims} cartedItems={cartedHadasim} />
            <LineItemTile type="aravot" items={aravots} cartedItems={cartedAravos} />
            <LineItemTile type="extra" items={extras} cartedItems={cartedExtras} />
          </div>
          <div className="card-header prices">
            <b>Subtotal: ${total}</b>
          </div>
          <button type="button" className="btn btn-primary" onClick={handleClick}>
            Save Order / Checkout
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Cart;
