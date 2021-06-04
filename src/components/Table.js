import React from 'react';
import { useSelector } from 'react-redux';
import DataRow from './DataRow';

export default function Table() {
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
          <input type="checkbox" />
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
          <DataRow debt={debt} key={debt.id} />
        ))}
      </tbody>
    </table>
  );
}
