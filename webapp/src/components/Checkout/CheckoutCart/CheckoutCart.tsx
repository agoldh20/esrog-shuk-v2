import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { OrderType } from '../../../slices/orderSlice/orderSlice';
import { LineItemType } from '../../../slices/lineItemsSlice/lineItemsSlice';
import { useNavigate } from 'react-router';
import { sendLineItemsAction } from '../../../actions/sendLineItemsAction';
import { Item, ItemsType } from '../../../slices/itemsSlice/itemsSlice';
import { CheckoutCartProps } from './CheckoutCartProps';
import CheckoutLineItemTile from './LineItem/CheckoutLineItemTile';

const CheckoutCart: FC<CheckoutCartProps> = ({order}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lineItems = useSelector<RootState, LineItemType[]>(state => state.lineItems);
  const { esrogs, extras, grades, lulavs, hadasims, aravots } = useSelector<RootState, ItemsType>(state => state.items);

  const handleEditClick = () => {
    navigate(`/order?=${order.id}`);
  }

  const handleCompleteClick = () => {
    // dispatch(sendLineItemsAction(navigate, orderId, lineItems))
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
      { lineItems.length ? (
        <div className="card cart">
          <div className="card-header">
            <b>Cart</b>
          </div>
          <div className="card-body">
            <CheckoutLineItemTile type="esrog" items={ esrogs } cartedItems={ cartedEsrogs }/>
            <CheckoutLineItemTile type="lulav" items={ lulavs } cartedItems={ cartedLulavs }/>
            <CheckoutLineItemTile type="hadasim" items={ hadasims } cartedItems={ cartedHadasim }/>
            <CheckoutLineItemTile type="aravot" items={ aravots } cartedItems={ cartedAravos }/>
            <CheckoutLineItemTile type="extra" items={ extras } cartedItems={ cartedExtras }/>
          </div>
          <div className="card-header prices">
            <b>Subtotal: ${ total }</b>
          </div>
          <div className="button-container">
            <button type="button" className="btn btn-success pull-left" onClick={ handleEditClick }>
              Edit Order
            </button>
            <button type="button" className="btn btn-primary pull-right" disabled={!order.paymentType} onClick={ handleCompleteClick }>
              {!order.paymentType ? 'Select Payment Method': 'Complete Order'}
            </button>
          </div>
        </div>
      ) : (
        <></>
      ) }
    </>
  );
}

export default CheckoutCart;