import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DataRow from './DataRow';
import { mainSwitch } from '../store/checkedRows';
import { updateTotal } from '../store/totalBalance';

export default function Table() {
  // Grabs the debts and activeRows from the Redux Store and gives access to dispatching to the store
  const debts = useSelector((state) => state.debts);
  const activeRows = useSelector((state) => state.checkedRows);
  const dispatch = useDispatch();

  const headers = [
    'Creditor',
    'First Name',
    'Last Name',
    'Min Pay%',
    'Balance',
  ];

  // Function for the catch all checkbox to check or uncheck all debts
  const checkAllHandler = (evt) => {
    // First it grabs an array of all of the checkboxes
    const checkboxes = Array.from(
      document.getElementsByClassName('debt-checkbox')
    );

    // If we have all of the checkboxes currently active, that means we need to uncheck them
    if (activeRows === checkboxes.length) {
      checkboxes.forEach((box) => (box.checked = false));
      dispatch(updateTotal(0));
      dispatch(mainSwitch(0));
      evt.target.checked = false;
    } else {
      // else, we check all of them
      checkboxes.forEach((box) => (box.checked = true));
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
