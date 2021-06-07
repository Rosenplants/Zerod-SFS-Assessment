import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newDebt } from '../store/debts';

export default function AddForm({ close }) {
  const dispatch = useDispatch();

  const [creditorName, setCreditorName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [minPaymentPercentage, setMinPayPerc] = useState(0);
  const [balance, setBalance] = useState(0);

  const handleChange = (setFunc) => {
    return function (evt) {
      setFunc(evt.target.value);
    };
  };

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
      ></input>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleChange(setFirstName)}
      ></input>
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleChange(setLastName)}
      ></input>
      <label htmlFor="minPaymentPercentage">Minimum Pay Percentage</label>
      <input
        type="number"
        step="0.01"
        id="minPaymentPercentage"
        name="minPaymentPercentage"
        onChange={handleChange(setMinPayPerc)}
      ></input>
      <label htmlFor="balance">Balance</label>
      <input
        type="number"
        step="0.01"
        id="balance"
        name="balance"
        onChange={handleChange(setBalance)}
      ></input>
      <button type="submit">Add New Debt</button>
    </form>
  );
}
