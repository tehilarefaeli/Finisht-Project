import React, { useEffect } from 'react';
import './App.css';
import { Switch, Redirect, Route, Router, BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
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
import Zipcode from './components/Zipcode';
import { CountryState, CountryAction, DispatchType } from './state/types';
import countryReducer from './state/countryReducer';
import Contact from './components/Contact';
import Times from './components/Times';
import HomePage from './components/Home';
import Footer from './components/Footer';
import CountryInRadiuos from './components/TuorInRadious';
import AddHotel from './components/AddHotel';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Services from './components/Services';





export default function App() {
  const store: Store<CountryState, CountryAction> & {
    dispatch: DispatchType
  } = createStore(countryReducer, applyMiddleware(thunk))

  return (
    <Provider store={store}>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/home" component={HomePage} />
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
          <Route path="/w" component={AddHotel} />
          <Route path="/zz" component={Zipcode} />
          <Route path="/contact" component={Contact} />
          <Route path="/time" component={Times} />
          <Route path="/qqqq" component={CountryInRadiuos} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/s" component={Services} />
          <Route path="/" component={HomePage} />

          {/*  */}
        </Switch>
        <Footer />
      </div>
    </Provider>
  );
}

