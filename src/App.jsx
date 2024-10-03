
import './App.css';
import Counter from './Component/Counter';
import DataFetchComponent from './Component/FetchData';
import List from './Component/List';
import Toogle from './Component/Toogle';

function App() {
  return (
    <div className="App">
      <List />
      <Counter />
      <Toogle />
      <DataFetchComponent />
    </div>
  );
}

export default App;
