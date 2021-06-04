import React from 'react';
import { useSelector } from 'react-redux';
import DataRow from './DataRow';

export default function Table({ total, setTotal, activeRows, setActiveRows }) {
  const debts = useSelector((state) => state.debts);

  const headers = [
    'Creditor',
    'First Name',
    'Last Name',
    'Min Pay%',
    'Balance',
  ];

  return (
    <table>
      <thead>
        <tr>
          <input
            type="checkbox"
            onChange={(evt) => {
              const checkboxes =
                document.getElementsByClassName('debt-checkbox');
              if (activeRows === checkboxes.length) {
                for (let i = 0; i < checkboxes.length; i++) {
                  checkboxes[i].checked = false;
                }
                setTotal(0);
                setActiveRows(0);
                evt.target.checked = false;
              } else {
                for (let i = 0; i < checkboxes.length; i++) {
                  checkboxes[i].checked = true;
                }
                setTotal(debts.reduce((acc, debt) => acc + debt.balance, 0));
                setActiveRows(checkboxes.length);
                evt.target.checked = true;
              }
            }}
          />
          {headers.map((col) => (
            <th
              className={col === 'Min Pay%' || col === 'Balance' ? 'num' : ''}
              key={col}
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {debts.map((debt) => (
          <DataRow
            debt={debt}
            key={debt.id}
            setActiveRows={setActiveRows}
            activeRows={activeRows}
            total={total}
            setTotal={setTotal}
          />
        ))}
      </tbody>
    </table>
  );
}
