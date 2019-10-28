import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar'
import Upload from './components/Upload'
import Home from './components/Home'
import {PrivateRoute} from './helper/private'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <Router>
      <Fragment>
        <Navbar/>
        
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <PrivateRoute exact path="/image" component={Upload}/>
        </Switch>
        
      </Fragment>
    </Router>
  );
}

export default App;
