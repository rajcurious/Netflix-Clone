import './App.css';
import Home from './routes/Home';
import Registeration from './routes/Registeration';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="app"> 

      
       <div className="home">
            <Switch>
              <Route exact path="/">
                 <Home/>
              </Route>
  
              <Route path="/register">
                 <Registeration/>
              </Route>
         </Switch>
            
          
        </div>
      </div>
    </Router>
  );
}

export default App;
