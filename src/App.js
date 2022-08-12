import logo from './logo.svg';
import './App.css';
import Unit from './components/Unit';
import { useEffect, useState } from 'react';
import UnitForm from './components/UnitForm';
import axios from "axios"


function App() {
  const [units, setUnits] = useState([])
  const addUnit = (unit)=>{
    axios.post('http://localhost:3001/units', unit).then(() => console.log('Unit added'))
    setUnits([...units, unit])
  }
  const getUnits = () =>{
    axios.get('http://localhost:3001/units')
    .then((response) => setUnits(response.data))
    .catch(error => console.log(error))
  }
  useEffect(() => {
    getUnits();
  }, []);
  return (

    <div className="App">
      <UnitForm addUnit = {addUnit}
      ></UnitForm>
      {units.map((unit)=>(
        (<Unit code={unit.code} title={unit.title} offerings={unit.offering}></Unit>)
      ))}
      
    </div>
  );
}

export default App;
