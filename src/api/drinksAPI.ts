import axios from "axios";
import {drinkItemType, drinksType} from "../interfaces/drinksApiType";

const instance = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/'
})

export const drinksAPI = {
    searchByName(name: string) {
        return instance.get<drinksType>('search.php', {params: {s: name}})
            .then(res => res.data && res.data.drinks
                ? res.data.drinks.map((drinkItem: drinkItemType) => {
                    return {
                        idDrink: drinkItem.idDrink,
                        strDrink: drinkItem.strDrink,
                        strDrinkThumb: drinkItem.strDrinkThumb,
                        strAlcoholic: drinkItem.strAlcoholic
                    }
                })
                : null)
            .catch(error => alert(error))
    },
    filterIsAlcoholic(isAlcoholic: boolean) {
        return instance.get<drinksType>('filter.php', {params: {a: isAlcoholic ? 'Alcoholic' : 'Non_Alcoholic'}})
            .then(res => res.data.drinks)
            .catch(error => alert(error))
    },
    getDetails(id: string) {
        return instance.get<drinksType>('lookup.php', {params: {i: id}})
            .then(res => res.data && res.data.drinks
                ? res.data.drinks.map((drinkItem: drinkItemType) => {
                    return {
                        idDrink: drinkItem.idDrink,
                        strDrink: drinkItem.strDrink,
                        strDrinkThumb: drinkItem.strDrinkThumb,
                        strAlcoholic: drinkItem.strAlcoholic,
                        strInstructions: drinkItem.strInstructions
                    }
                })
                : null)
            .catch(error => alert(error))
    }
}