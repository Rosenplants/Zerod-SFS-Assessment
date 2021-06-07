import React from 'react';
import { useDispatch } from 'react-redux';
import { removeDebts } from '../store/debts';

export default function ButtonRow({ openAdd }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    const checkedBoxes = Array.from(
      document.getElementsByClassName('debt-checkbox')
    ).filter((box) => box.checked);
    const ids = checkedBoxes.map((box) => +box.value);
    dispatch(removeDebts(ids));
  };

  return (
    <div id="button-row">
      <button type="button" className="add" onClick={openAdd}>
        Add Debt
      </button>
      <button type="button" className="remove" onClick={handleRemove}>
        Remove Debt
      </button>
    </div>
  );
}
