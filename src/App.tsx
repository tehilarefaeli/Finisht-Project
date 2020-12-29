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
import MyAccount from './components/MyAccount';
import Home from './components/Home';



export default function App() {


  return (

    <div className="App">
      <Header />

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/recipeReviewCard" component={RecipeReviewCard} />
        <Route path="/country" component={Country} />
        <Route path="/hotel/:serviceId/:country" component={Hotel} />
        <Route path="/restaurant/:serviceId/:country" component={Restaurant} />
        <Route path="/synagogue/:serviceId/:country" component={Synagogue} />
        <Route path="/tour/:serviceId/:country" component={Tour} />
        <Route path="/site/:serviceId/:country" component={Site} />
        <Route path="/user" component={User} />
        <Route path="/myAccount" component={MyAccount} />
        <Route path="/t" component={FormDialogPassword} />
        <Route path="/w" component={FormDialog} />


      </Switch>

    </div>

  );
}

