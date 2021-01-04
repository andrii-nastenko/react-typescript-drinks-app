import {drinkItem} from "../interfaces/cocktailsType";
import {SET_FILTER_IS_ALCOHOLIC, SET_SEARCH_BY_NAME, SET_DETAILS, IS_FETCHING} from "./drinksActions";
import {reducerActionsType} from "../interfaces/actionsType";

const initialState = {
    drinks: [] as drinkItem[],
    drinkDetails: {
        idDrink: '',
        strDrink: '',
        strDrinkThumb: '',
        strAlcoholic: '',
        strInstructions: ''
    } as drinkItem,
    isFetching: false
}

export const drinksReducer = (state = initialState, action: reducerActionsType): typeof initialState => {
    switch (action.type) {
        case IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case SET_SEARCH_BY_NAME:
            return {...state, drinks: [...action.drinks]}
        case SET_FILTER_IS_ALCOHOLIC:
            return {...state, drinks: [...action.drinks]}
        case SET_DETAILS:
            return {...state, drinkDetails: action.drinkDetails}
        default:
            return state
    }
}