import {drinkItem} from "../interfaces/cocktailsType";
import {
    setFilterIsAlcoholicType, setSearchByNameType, setDetailsType,
    isFetchingType, requestFilterIsAlcoholicType, requestSearchByNameType, requestDetailsType
} from "../interfaces/actionsType";

export const IS_FETCHING = "SET_IS_FETCHING"
export const isFetching = (isFetching: boolean): isFetchingType => ({type: IS_FETCHING, isFetching})

export const REQUEST_FILTER_IS_ALCOHOLIC = "REQUEST_FILTER_IS_ALCOHOLIC"
export const requestFilterIsAlcoholic = (isAlcoholic: boolean): requestFilterIsAlcoholicType => ({
    type: REQUEST_FILTER_IS_ALCOHOLIC,
    isAlcoholic
})
export const SET_FILTER_IS_ALCOHOLIC = "SET_FILTER_IS_ALCOHOLIC"
export const setFilterIsAlcoholic = (drinks: Array<drinkItem>): setFilterIsAlcoholicType => ({
    type: SET_FILTER_IS_ALCOHOLIC,
    drinks
})

export const REQUEST_SEARCH_BY_NAME = "REQUEST_SEARCH_BY_NAME"
export const requestSearchByName = (name: string): requestSearchByNameType => ({type: REQUEST_SEARCH_BY_NAME, name})
export const SET_SEARCH_BY_NAME = "SET_SEARCH_BY_NAME"
export const setDrinksByName = (drinks: Array<drinkItem>): setSearchByNameType => ({type: SET_SEARCH_BY_NAME, drinks})

export const REQUEST_DETAILS = "REQUEST_DETAILS"
export const requestDetails = (id: string): requestDetailsType => ({type: REQUEST_DETAILS, id})
export const SET_DETAILS = "SET_DETAILS"
export const setDrinkDetails = (drinkDetails: drinkItem): setDetailsType => ({type: SET_DETAILS, drinkDetails})