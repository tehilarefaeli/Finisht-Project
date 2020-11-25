import React from 'react';
import './App.css';
import { Switch, Redirect, Route, Router, BrowserRouter } from 'react-router-dom';
import SignIn from './components/Sign-in';
import SignUp from './components/Sing-up';
import RecipeReviewCard from './components/Cards';
import Country from './components/Countries';
import Hotel from './components/Hotel';
import Restaurant from './components/Restaurant';
import Synagogue from './components/Synagogue';
import Tour from './components/Tour';
import Site from './components/Site';
import User from './components/User';
import ValidationTextFields from './components/bb';
import FormDialog from './components/PersonalArea';
import FormDialogPassword from './components/ChangePassword';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/recipeReviewCard" component={RecipeReviewCard} />
        <Route path="/country" component={Country} />
        <Route path="/hotel" component={Hotel} />
        <Route path="/restaurant" component={Restaurant} />
        <Route path="/synagogue" component={Synagogue} />
        <Route path="/tour" component={Tour} />
        <Route path="/site" component={Site} />
        <Route path="/user" component={User} />
        <Route path="/a" component={ValidationTextFields} />
        <Route path="/form" component={FormDialog} />
        <Route path="/t" component={FormDialogPassword} />




      </Switch>
    </div>
  );
}

export default App;
