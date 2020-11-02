import React from 'react';

import './App.css';
import { Switch, Redirect, Route, Router, BrowserRouter } from 'react-router-dom';
import SignIn from './components/Sign-in';
import SignUp from './components/Sing-up';
//import AddressForm from './components/Address-form';
import ChooseContry from './components/Choose-contry';
import Example from './components/New-component';
import RecipeReviewCard from './components/Cards';
import Country from './components/Countries';
import EnhancedTable from './components/Table';
function App() {
  return (
    <div className="App">
      <Switch>

        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/chooseContry" component={ChooseContry} />
        <Route path="/Exmaple" component={Example} />
        <Route path="/RecipeReviewCard" component={RecipeReviewCard} />
        <Route path="/Country" component={Country} />
        <Route path="/EnhancedTable" component={EnhancedTable} />


      </Switch>
    </div>
  );
}

export default App;
