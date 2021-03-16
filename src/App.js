import './App.css';

import Navbar from './component/Navbar'; 
import About from './component/About';
import Shop from './component/Shop'; 

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/about" component={About} /> 

            <Route path="/shop" component={Shop} /> 
          </Switch>

      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home!</h1>
  </div>
);

export default App;
