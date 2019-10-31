import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar'
import Upload from './components/Upload'
import Home from './components/Home'
import UserState from './Context/UserState'
import {PrivateRoute} from './helper/private'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <UserState>
    <Router>
      <Fragment>
        <Navbar/>
        
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <PrivateRoute exact path="/image" component={Upload}/>
        </Switch>
        
      </Fragment>
    </Router>
    </UserState>
  );
}

export default App;
