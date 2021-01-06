import style from '../styles/Cocktails.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {stateType} from "../interfaces/stateType";
import {useEffect, useState} from "react";
import {requestFilterIsAlcoholic} from "../redux/drinksActions";
import {DrinksGrid} from "../components/DrinksGrid";

export function Drinks() {
    const dispatch = useDispatch()
    const state = useSelector((state: stateType) => state.drinks)
    const [isAlcoholic, setIsAlcoholic] = useState(false)

    useEffect(() => {
        dispatch(requestFilterIsAlcoholic(isAlcoholic))
    }, [isAlcoholic, dispatch])

    return (
        <div className={style.container}>
            {isAlcoholic ? <h2>Alcoholic Drinks</h2> : <h2>Non-Alcoholic Drinks</h2>}
            <section className={style.drinksFilter}>
                <span>
                    <input type="radio" id="non-alcoholic" name="drinks" checked={!isAlcoholic}
                           onChange={() => setIsAlcoholic(!isAlcoholic)}/>
                    <label htmlFor="non-alcoholic">Non-alcoholic</label>
                </span>
                <span>
                    <input type="radio" id="alcoholic" name="drinks" checked={isAlcoholic}
                           onChange={() => setIsAlcoholic(!isAlcoholic)}/>
                    <label htmlFor="alcoholic">Alcoholic</label>
                </span>
            </section>
            <DrinksGrid drinks={state.drinks}/>
        </div>
    )
}