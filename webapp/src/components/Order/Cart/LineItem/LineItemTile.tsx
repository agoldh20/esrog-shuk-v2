import React, { FC } from 'react';
import { LineItemTileProps } from './LineItemTileProps';
import { useDispatch } from 'react-redux';
import { removeLineItem } from '../../../../slices/lineItemsSlice/lineItemsSlice';

interface BuiltItemType {
  lineId?: number;
  kind?: string;
  lineTotal?: number;
  grade?: string;
}

const LineItemTile: FC<LineItemTileProps> = ({ items, type, grades, cartedItems }) => {
  const dispatch = useDispatch();
  const itemTitle = type.charAt(0).toUpperCase() + type.slice(1);

  const cartItems = cartedItems.map(ci => {
    const builtItem = {} as BuiltItemType;
    builtItem.lineId = ci.lineId;
    builtItem.lineTotal = ci.lineTotal;
    builtItem.kind = items.find(item => item.id === ci[`${type}Id`])?.kind;
    if (grades) {
      builtItem.grade = grades.find(grade => grade.id === ci.gradeId)?.grade;
    }

    return builtItem;
  });

  const hanldeDelete = (id: number) => {
    dispatch(removeLineItem(id));
  };

  const kindTotal = cartedItems
    .map(cartedItem => cartedItem.lineTotal)
    .reduce((accumulator, currentValue) => {
      return accumulator! + currentValue!;
    }, 0);

  return (
    <>
      {cartedItems.length ? (
        <table className="table table-sm">
          <thead>
            <tr key={itemTitle}>
              <th scope="col">{itemTitle} ({cartedItems.length})</th>
              <th scope="col" className="pull-right">sub: ${kindTotal}</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem, index) => (
              <tr key={`${cartItem}-${index}`}>
                <td>{cartItem?.kind} {cartItem?.grade && <>- {cartItem?.grade}</>}</td>
                <td className="prices">
                  ${cartItem?.lineTotal}&nbsp;
                  <i
                    style={{ fontSize: '18px', cursor: 'pointer' }}
                    className="fa"
                    onClick={() => hanldeDelete(cartItem.lineId!)}>
                    &#xf014;
                  </i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <></>
      )}
    </>
  );
};

export default LineItemTile;
