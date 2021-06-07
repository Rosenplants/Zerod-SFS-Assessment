import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DataRow from './DataRow';
import { mainSwitch } from '../store/checkedRows';
import { updateTotal } from '../store/totalBalance';

export default function Table({ totalBalance, activeRows }) {
  const debts = useSelector((state) => state.debts);
  const dispatch = useDispatch();

  const headers = [
    'Creditor',
    'First Name',
    'Last Name',
    'Min Pay%',
    'Balance',
  ];

  const checkAllHandler = (evt) => {
    const checkboxes = document.getElementsByClassName('debt-checkbox');
    if (activeRows === checkboxes.length) {
      for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
      }
      dispatch(updateTotal(0));
      dispatch(mainSwitch(0));
      evt.target.checked = false;
    } else {
      for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
      }
      dispatch(updateTotal(debts.reduce((acc, debt) => acc + debt.balance, 0)));
      dispatch(mainSwitch(checkboxes.length));
      evt.target.checked = true;
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th className="checkbox">
            <input type="checkbox" onChange={checkAllHandler} />
          </th>
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
