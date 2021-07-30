
import './App.css';
// import Welcome from './components/welcome';
import NameSite from './components/welcome';
import Counter from './components/counter';

function App() {
  const clickHandler = (firstName) => {
    alert("Hi " + firstName)
  }
  return (
    <div className="App">
      <NameSite firstName="Ayda" Handler={()=>clickHandler("Ayda")} />
      <Counter />
    </div>
  );
}

export default App;
