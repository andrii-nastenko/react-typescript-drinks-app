import {drinkItemType} from "../interfaces/drinksApiType";
import {SET_FILTER_IS_ALCOHOLIC, SET_SEARCH_BY_NAME, SET_DETAILS, IS_FETCHING} from "./drinksActions";
import {reducerActionsType} from "../interfaces/actionsType";

const initialState = {
    drinks: [] as drinkItemType[],
    searchResult: [] as drinkItemType[] | null,
    drinkDetails: {
        idDrink: '',
        strDrink: '',
        strDrinkThumb: '',
        strAlcoholic: '',
        strInstructions: ''
    } as drinkItemType,
    isFetching: false
}

export const drinksReducer = (state = initialState, action: reducerActionsType): typeof initialState => {
    switch (action.type) {
        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case SET_SEARCH_BY_NAME:
            return {
                ...state, searchResult: action.drinks ? [...action.drinks] : null
            }
        case SET_FILTER_IS_ALCOHOLIC:
            return {
                ...state, drinks: action.drinks ? [...action.drinks] : []
            }
        case SET_DETAILS:
            return {
                ...state, drinkDetails: {
                    idDrink: action.drinkDetails ? action.drinkDetails[0].idDrink : '',
                    strDrink: action.drinkDetails ? action.drinkDetails[0].strDrink : '',
                    strDrinkThumb: action.drinkDetails ? action.drinkDetails[0].strDrinkThumb : '',
                    strAlcoholic: action.drinkDetails ? action.drinkDetails[0].strAlcoholic : '',
                    strInstructions: action.drinkDetails ? action.drinkDetails[0].strInstructions : ''
                }
            }
        default:
            return state
    }
}