import React, { useEffect } from 'react';
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
import FormDialogPassword from './components/ChangePassword';
import axios from 'axios';
import FormDialog from './components/PersonalArea';
import Header from './components/Header‏'



function App() {


  return (

    <div className="App">
      <Header />


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
        <Route path="/t" component={FormDialogPassword} />
        <Route path="/w" component={FormDialog} />


      </Switch>

    </div>

  );
}

export default App;
