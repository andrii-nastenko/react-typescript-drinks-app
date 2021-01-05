import style from '../styles/Cocktails.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {stateType} from "../interfaces/stateType";
import {useEffect, useState} from "react";
import {requestFilterIsAlcoholic} from "../redux/drinksActions";

export function Cocktails() {
    const dispatch = useDispatch()
    const state = useSelector((state: stateType) => state.drinks)
    const [isAlcoholic, setIsAlcoholic] = useState(false)

    useEffect(() => {
        dispatch(requestFilterIsAlcoholic(isAlcoholic))
    }, [isAlcoholic, dispatch])

    return (
        <div className={style.container}>
            {isAlcoholic ? <h2>Alcoholic Cocktails</h2> : <h2>Non-Alcoholic Cocktails</h2>}
            <section className={style.drinksFilter}>
                <span>
                    <input type="radio" id="non-alcoholic" name="cocktails" checked={!isAlcoholic}
                           onChange={() => setIsAlcoholic(!isAlcoholic)}/>
                    <label htmlFor="non-alcoholic">Non-alcoholic</label>
                </span>
                <span>
                    <input type="radio" id="alcoholic" name="cocktails" checked={isAlcoholic}
                           onChange={() => setIsAlcoholic(!isAlcoholic)}/>
                    <label htmlFor="alcoholic">Alcoholic</label>
                </span>
            </section>
            <section className={style.drinksSection}>
                {state.drinks.length && state.drinks.map(item => {
                    return (
                        <div key={item.idDrink} className={style.drinkItem}>
                            <p>{item.strDrink}</p>
                            <img src={item.strDrinkThumb} alt={item.strDrink}/>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}