import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchDebts } from './store/debts';
import Table from './components/Table';

function App() {
  const dispatch = useDispatch();
  const debts = useSelector((state) => state.debts);

  const [total, setTotal] = useState(0);
  const [activeRows, setActiveRows] = useState(0);

  // As soon as the component mounts, fetches the data and updates the store
  useEffect(() => {
    dispatch(fetchDebts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Table
        setTotal={setTotal}
        total={total}
        activeRows={activeRows}
        setActiveRows={setActiveRows}
      />
      <div id="button-row"></div>
      <div id="total-row">
        <p>
          Total: <span className="num">${total.toFixed(2)}</span>
        </p>
      </div>
      <div id="row-counts">
        <span>Total Row Count: {debts.length}</span>
        <span>Check Row Count: {activeRows}</span>
      </div>
    </div>
  );
}

export default App;
