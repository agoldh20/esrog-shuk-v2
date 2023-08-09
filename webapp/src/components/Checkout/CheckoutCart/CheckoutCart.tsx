import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { LineItemType } from '../../../slices/lineItemsSlice/lineItemsSlice';
import { useNavigate } from 'react-router';
import { ItemsType } from '../../../slices/itemsSlice/itemsSlice';
import { CheckoutCartProps } from './CheckoutCartProps';
import CheckoutLineItemTile from './LineItem/CheckoutLineItemTile';
import { updateOrderAction } from '../../../actions/updateOrderAction';

const CheckoutCart: FC<CheckoutCartProps> = ({ order }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lineItems = useSelector<RootState, LineItemType[]>(state => state.lineItems);
  const { esrogs, extras, grades, lulavs, hadasims, aravots } = useSelector<RootState, ItemsType>(
    state => state.items
  );

  const linesTotal = lineItems
    .map(lineItem => lineItem.lineTotal)
    .reduce((accumulator, currentValue) => {
      return accumulator! + currentValue!;
    }, 0);

  const orderTotal = () => {
    const voucherTotal = order.voucher?.amount || 0;
    return linesTotal! - voucherTotal;
  };

  const handleEditClick = () => {
    dispatch(updateOrderAction(order.id!, 'open'));
    navigate(`/order?id=${order.id}`);
  };

  const handleCompleteClick = () => {
    dispatch(updateOrderAction(order.id!, 'paid', order.paymentType!, orderTotal()));
  };

  const cartedEsrogs = lineItems.filter(esrog => esrog.esrogId);
  const cartedLulavs = lineItems.filter(lulav => lulav.lulavId);
  const cartedHadasim = lineItems.filter(hadasim => hadasim.hadasimId);
  const cartedAravos = lineItems.filter(aravos => aravos.aravotId);
  const cartedExtras = lineItems.filter(extra => extra.extraId);

  return (
    <div className="card cart">
      <div className="card-header">
        <b>Cart</b>
      </div>
      <div className="card-body">
        <CheckoutLineItemTile type="esrog" items={esrogs} grades={grades} cartedItems={cartedEsrogs} />
        <CheckoutLineItemTile type="lulav" items={lulavs} cartedItems={cartedLulavs} />
        <CheckoutLineItemTile type="hadasim" items={hadasims} cartedItems={cartedHadasim} />
        <CheckoutLineItemTile type="aravot" items={aravots} cartedItems={cartedAravos} />
        <CheckoutLineItemTile type="extra" items={extras} cartedItems={cartedExtras} />
      </div>
      <div className="card-header prices">
        <b>
          Subtotal {order.voucher?.id ? 'after voucher' : ''}: ${orderTotal()}
        </b>
      </div>
      <div className="button-container">
        <button type="button" className="btn btn-success pull-left" onClick={handleEditClick}>
          Edit Order
        </button>
        {order.status === 'open' ? (
          <button
            type="button"
            className="btn btn-primary pull-right"
            disabled={!order.paymentType}
            onClick={handleCompleteClick}>
            {!order.paymentType ? 'Select Payment Method' : 'Complete Order'}
          </button>
        ) : (
          <button type="button" className="btn btn-danger pull-right">
            Order Marked Paid
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutCart;
