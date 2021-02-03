import { Country } from './../interfaces/Country.interface';


type CountryState = {
    countries: Country[]
}

type CountryAction = {
    type: string
    country: Country
}

type DispatchType = (args: CountryAction) => CountryAction