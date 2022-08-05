import logo from './logo.svg';
import './App.css';
import Unit from './components/Unit';

const units = [
  {code: 'COMP1010', title:'Fundamentals of Computer Science', offering: ['S1', 'S2']},
  {code: 'COMP1750', title:'Introduction to Business Information Systems', offering: ['S1']},
  {code: 'COMP2110', title:'Web Technology', offering: ['S1', 'S2']},
  {code: 'COMP2750', title:'Applications Modelling and Development', offering: ['S1']},
  {code: 'MMCC2045', title:'Interactive Web Design', offering: ['S2']},
  {code: 'COMP3120', title:'Advanced Web Development', offering: ['S2']},
  {code: 'COMP3130', title:'Mobile Application Development', offering: ['S1']}
]
function App() {
  return (

    <div className="App">
      {units.map((unit)=>(
        (<Unit code={unit.code} title={unit.title} offerings={unit.offering}></Unit>)
      ))}
      
    </div>
  );
}

export default App;
