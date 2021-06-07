import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchDebts } from './store/debts';
import Table from './components/Table';
import ButtonRow from './components/ButtonRow';

function App() {
  // Redux Hooks to allow us to easily fetch the debts and get access to them
  const dispatch = useDispatch();
  const debts = useSelector((state) => state.debts);
  const activeRows = useSelector((state) => state.checkedRows);
  const totalBalance = useSelector((state) => state.totalBalance);

  // As soon as the component mounts, fetches the data and updates the store
  useEffect(() => {
    dispatch(fetchDebts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Sarah Zerod SFS Coding Assesment</h1>
      <Table totalBalance={totalBalance} activeRows={activeRows} />
      <ButtonRow />
      <div id="total-row" className="bold">
        <p>Total: </p>
        <p className="num">${totalBalance.toFixed(2)}</p>
      </div>
      <div id="row-counts" className="bold">
        <span>Total Row Count: {debts.length}</span>
        <span>Check Row Count: {activeRows}</span>
      </div>
    </div>
  );
}

export default App;
