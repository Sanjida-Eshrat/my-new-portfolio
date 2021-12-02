import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Home/Contact/Contact';
import About from './components/Home/About/About';
import Header from './components/Home/Header/Header';
import Footer from './components/Home/Footer/Footer';
import Home from './components/Home/Home/Home';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App bg-dark text-white">
      <Router>
      <Header></Header>
        <Switch>       
          {/* Redirect to Home page */}
          <Route exact path ="/">
             <Home></Home>
          </Route>
          {/* Redirect to Home page */}
          <Route path ="/home">
             <Home></Home>
          </Route>
          {/* Redirect to About page */}
          {/* <Route path ="/about">
             <About></About>
          </Route> */}
          {/* Redirect to Details page */}
          <Route path ="/details/:projectId">
             <Details></Details>
          </Route>
          {/* Redirect to Contact page */}
          <Route path ="/contact">
             <Contact></Contact>
          </Route>
        </Switch>  
        <Footer></Footer>       
      </Router>
    </div>
  );
}

export default App;
