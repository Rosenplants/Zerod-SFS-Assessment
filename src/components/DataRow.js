import React from 'react';
import { useDispatch } from 'react-redux';
import { check, uncheck } from '../store/checkedRows';
import { addToTotal, subtractFromTotal } from '../store/totalBalance';

export default function DataRow({ debt }) {
  const dispatch = useDispatch();
  return (
    <>
      <tr>
        <td className="checkbox">
          <input
            type="checkbox"
            className="debt-checkbox"
            value={debt.id}
            onChange={(evt) => {
              if (evt.target.checked) {
                dispatch(check());
                dispatch(addToTotal(debt.balance));
              } else {
                dispatch(uncheck());
                dispatch(subtractFromTotal(debt.balance));
              }
            }}
          />
        </td>
        <td>{debt.creditorName}</td>
        <td>{debt.firstName}</td>
        <td>{debt.lastName}</td>
        <td className="num">{debt.minPaymentPercentage.toFixed(2)}%</td>
        <td className="num">{debt.balance.toFixed(2)}</td>
      </tr>
    </>
  );
}
