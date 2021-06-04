import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchDebts } from './store/debts';
import Table from './components/Table';

function App() {
  const dispatch = useDispatch();

  // As soon as the component mounts, fetches the data and updates the store
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchDebts());
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Table />
      <div id="button-row"></div>
      <div id="total-row"></div>
    </div>
  );
}

export default App;
