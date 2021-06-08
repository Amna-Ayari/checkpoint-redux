import './App.css';
import AddTask from './Component/AddTask';
import ListTask from './Component/ListTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState(false) 
  const toggle=()=> {
    setFilter(!filter)
  }
  return (
    <div className="App">
     <AddTask toggle={toggle} filter={filter}/>
     <ListTask filter={filter}/>
    </div>
  );
}

export default App;
