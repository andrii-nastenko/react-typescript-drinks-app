import {
    SET_DETAILS, SET_FILTER_IS_ALCOHOLIC, IS_FETCHING, SET_SEARCH_BY_NAME,
    REQUEST_SEARCH_BY_NAME, REQUEST_FILTER_IS_ALCOHOLIC, REQUEST_DETAILS
} from "../redux/drinksActions";
import {drinkItemType} from "./drinksApiType";

export interface isFetchingType {
    type: typeof IS_FETCHING
    isFetching: boolean
}

export interface requestFilterIsAlcoholicType {
    type: typeof REQUEST_FILTER_IS_ALCOHOLIC
    isAlcoholic: boolean
}

export interface setFilterIsAlcoholicType {
    type: typeof SET_FILTER_IS_ALCOHOLIC
    drinks: Array<drinkItemType>
}

export interface requestSearchByNameType {
    type: typeof REQUEST_SEARCH_BY_NAME
    name: string
}

export interface setSearchByNameType {
    type: typeof SET_SEARCH_BY_NAME
    drinks: Array<drinkItemType>
}

export interface requestDetailsType {
    type: typeof REQUEST_DETAILS
    id: string
}

export interface setDetailsType {
    type: typeof SET_DETAILS
    drinkDetails: Array<drinkItemType>
}

export type reducerActionsType =
    isFetchingType
    | setSearchByNameType
    | setFilterIsAlcoholicType
    | setDetailsType