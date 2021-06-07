import React from 'react';
import { useDispatch } from 'react-redux';
import { removeDebts } from '../store/debts';

export default function ButtonRow({ openAdd }) {
  const dispatch = useDispatch();

  // This function handles removing any checked debts
  const handleRemove = () => {
    // First it grabs all checkboxes and filters through to only grab the selected ones
    const checkedBoxes = Array.from(
      document.getElementsByClassName('debt-checkbox')
    ).filter((box) => box.checked);

    // Then it maps over that array to only send through each box's value
    // Which I have assigned to be the debt's ID
    const ids = checkedBoxes.map((box) => +box.value);

    // Finally, it dispatches an action creator with that array of IDs
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
