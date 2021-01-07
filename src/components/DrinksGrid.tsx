import style from "../styles/DrinksGrid.module.scss";
import {drinkItemType, drinksType} from "../interfaces/drinksApiType";
import {useDispatch} from "react-redux";
import {requestDetails} from "../redux/drinksActions";

interface DrinksGridType extends drinksType {
    setIsOpen: (modalIsOpen: boolean) => void
}

export function DrinksGrid({drinks, setIsOpen}: DrinksGridType) {
    const dispatch = useDispatch()

    const openDetailsHandler = (drink: drinkItemType) => {
        dispatch(requestDetails(drink.idDrink))
        setIsOpen(true)
    }

    return (
        <section className={style.drinksSection}>
            {drinks
                ? drinks.map(item => {
                    return (
                        <div key={item.idDrink} className={style.drinkItem}>
                            <p>{item.strDrink}</p>
                            <img src={item.strDrinkThumb} alt={item.strDrink} onClick={() => openDetailsHandler(item)}/>
                        </div>
                    )
                })
                : null}
        </section>
    )
}