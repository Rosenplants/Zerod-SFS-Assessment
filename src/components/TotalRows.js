import React from 'react';
import { useSelector } from 'react-redux';

export default function TotalRows() {
  // Grabs the necessary totals from the Redux store
  const debts = useSelector((state) => state.debts);
  const activeRows = useSelector((state) => state.checkedRows);
  const totalBalance = useSelector((state) => state.totalBalance);

  return (
    <>
      <div id="total-row" className="bold">
        <p>Total: </p>
        <p className="num">${totalBalance.toFixed(2)}</p>
      </div>
      <div id="row-counts" className="bold">
        <span>Total Row Count: {debts.length}</span>
        <span>Check Row Count: {activeRows}</span>
      </div>
    </>
  );
}
