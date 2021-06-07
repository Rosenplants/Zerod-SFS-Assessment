import React from 'react';
import AddForm from './AddForm';

export default function AddFormPopUp({ close }) {
  return (
    <div className="modal">
      <div className="modal_content">
        <span className="close" onClick={close}>
          &times;
        </span>
        <h2>Add a Debt</h2>
        <h4>Please Enter The Debt Information</h4>
        <AddForm close={close} />
      </div>
    </div>
  );
}
