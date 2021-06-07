import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchDebts } from './store/debts';
import Table from './components/Table';
import ButtonRow from './components/ButtonRow';
import TotalRows from './components/TotalRows';
import AddFormPopUp from './components/AddFormPopUp';

function App() {
  // Redux Hooks to allow us to easily fetch the debts and get access to them
  const dispatch = useDispatch();
  const [isPopUpOpen, setPopUpOpen] = useState(false);

  // As soon as the component mounts, fetches the data and updates the store
  useEffect(() => {
    dispatch(fetchDebts());
  }, [dispatch]);

  const openPopUp = () => {
    setPopUpOpen(true);
  };

  const closePopUp = () => {
    setPopUpOpen(false);
  };

  return (
    <div className="App">
      {isPopUpOpen ? <AddFormPopUp close={closePopUp} /> : null}
      <h1>Sarah Zerod SFS Coding Assesment</h1>
      <Table />
      <ButtonRow openAdd={openPopUp} />
      <TotalRows />
    </div>
  );
}

export default App;
