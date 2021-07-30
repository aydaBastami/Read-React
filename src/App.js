
import './App.css';
import { Redirect ,Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ClickME from './components/ClickMe';
import PageNotFound from './components/PageNotFound';
// import Welcome from './components/welcome';
// import NameSite from './components/welcome';
// import Counter from './components/counter';

// function App() {
//   const clickHandler = (firstName) => {
//     alert("Hi " + firstName)
//   }
//   return (
//     <div className="App">
//       <NameSite firstName="Ayda" Handler={()=>clickHandler("Ayda")} />
//       <Counter />
//     </div>
//   );
// }


function App () {
return (
  <main>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/click" component={ClickME}/>
      <Redirect from="/Welcome" to="/" />
      <Route component={PageNotFound} />
      
    </Switch>
  </main>
)
}
export default App;
