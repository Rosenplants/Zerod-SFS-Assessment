import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newDebt } from '../store/debts';

export default function AddForm({ close }) {
  const dispatch = useDispatch();

  // Creates local state for all form fields to have a controlled form
  const [creditorName, setCreditorName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [minPaymentPercentage, setMinPayPerc] = useState(0);
  const [balance, setBalance] = useState(0);

  // Creates a change handler for all form fields to set their respective state
  const handleChange = (setFunc) => {
    return function (evt) {
      setFunc(evt.target.value);
    };
  };

  // Submits the form and dispatches the new debt information to the store
  // Also calls the close function to close the pop up
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      newDebt({
        creditorName,
        firstName,
        lastName,
        minPaymentPercentage: +minPaymentPercentage,
        balance: +balance,
      })
    );
    close();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="creditorName">Creditor</label>
      <input
        type="text"
        id="creditorName"
        name="creditorName"
        onChange={handleChange(setCreditorName)}
        value={creditorName}
      ></input>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleChange(setFirstName)}
        value={firstName}
      ></input>
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleChange(setLastName)}
        value={lastName}
      ></input>
      <label htmlFor="minPaymentPercentage">Minimum Pay Percentage</label>
      <input
        type="number"
        step="0.01"
        id="minPaymentPercentage"
        name="minPaymentPercentage"
        onChange={handleChange(setMinPayPerc)}
        value={minPaymentPercentage}
      ></input>
      <label htmlFor="balance">Balance</label>
      <input
        type="number"
        step="0.01"
        id="balance"
        name="balance"
        onChange={handleChange(setBalance)}
        value={balance}
      ></input>
      <button type="submit">Add New Debt</button>
    </form>
  );
}
