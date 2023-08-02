import { FC } from 'react';
import { LineItemTileProps } from './LineItemTileProps';
import { useDispatch } from 'react-redux';
import { removeLineItem } from '../../../../slices/lineItemsSlice/lineItemsSlice';

const LineItemTile: FC<LineItemTileProps> = ({ items, type, cartedItems }) => {
  const dispatch = useDispatch();
  const itemTitle = type.charAt(0).toUpperCase() + type.slice(1);

  const cartItems = cartedItems.map(ci => {
    return {
      lineId: ci.lineId,
      lineTotal: ci.lineTotal,
      kind: items.find(item => item.id === ci[`${type}Id`])?.kind,
    };
  });

  const hanldeDelete = (id: number) => {
    dispatch(removeLineItem(id))
  };

  return (
    <>
      {cartedItems.length ? (
        <table className="table table-sm">
          <thead>
            <tr>
              <th scope="col">{itemTitle}</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(cartItem => (
              <tr>
                <td>{cartItem?.kind}</td>
                <td className="prices">${cartItem?.lineTotal}</td>
                <td>
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
