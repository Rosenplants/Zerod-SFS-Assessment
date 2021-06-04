import React from 'react';

export default function DataRow({
  debt,
  total,
  setTotal,
  activeRows,
  setActiveRows,
}) {
  return (
    <>
      <tr>
        <input
          type="checkbox"
          className="debt-checkbox"
          onChange={(evt) => {
            if (evt.target.checked) {
              setActiveRows(activeRows + 1);
              setTotal(total + debt.balance);
            } else {
              setActiveRows(activeRows - 1);
              setTotal(total - debt.balance);
            }
          }}
        />
        <td>{debt.creditorName}</td>
        <td>{debt.firstName}</td>
        <td>{debt.lastName}</td>
        <td className="num">{debt.minPaymentPercentage.toFixed(2)}%</td>
        <td className="num">{debt.balance.toFixed(2)}</td>
      </tr>
    </>
  );
}
