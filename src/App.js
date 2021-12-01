import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div className="App ">
      <Router>
        <Switch>       
          {/* Redirect to Home page */}
          <Route exact path ="/">
             <Home></Home>
          </Route>
          {/* Redirect to Home page */}
          <Route path ="/home">
             <Home></Home>
          </Route>

        </Switch>         
      </Router>
    </div>
  );
}

export default App;
