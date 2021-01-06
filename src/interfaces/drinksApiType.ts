export interface drinkItemType {
    idDrink: string
    strDrink: string
    strDrinkThumb: string
    strAlcoholic?: string
    strInstructions?: string
}

export interface drinksType {
    drinks: Array<drinkItemType> | null
}
