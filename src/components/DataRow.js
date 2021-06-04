import React from 'react';

export default function DataRow({ debt }) {
  return (
    <>
      <tr>
        <input type="checkbox" />
        <td>{debt.creditorName}</td>
        <td>{debt.firstName}</td>
        <td>{debt.lastName}</td>
        <td className="num">{debt.minPaymentPercentage.toFixed(2)}%</td>
        <td className="num">{debt.balance.toFixed(2)}</td>
      </tr>
    </>
  );
}
