import style from "../styles/DrinksGrid.module.scss";
import {drinksType} from "../interfaces/drinksApiType";

export function DrinksGrid({drinks}: drinksType) {
    return (
        <section className={style.drinksSection}>
            {drinks
                ? drinks.map(item => {
                    return (
                        <div key={item.idDrink} className={style.drinkItem}>
                            <p>{item.strDrink}</p>
                            <img src={item.strDrinkThumb} alt={item.strDrink}/>
                        </div>
                    )
                })
                : null}
        </section>
    )
}