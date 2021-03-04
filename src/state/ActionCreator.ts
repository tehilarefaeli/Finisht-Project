import { Country } from './../interfaces/Country.interface';
import * as actionTypes from "./ActionTypes";
import { CountryAction, CountryGetAction, DispatchType } from './types';

export function addCountry(country: Country) {
    const action: CountryAction = {
        type: actionTypes.ADD_MY_COUNTRIE,
        country,
    }

    return simulateHttpRequest(action)
}

export function removeCountry(country: Country) {
    const action: CountryAction = {
        type: actionTypes.REMOVE_MY_COUNTRIE,
        country,
    }
    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: CountryAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}