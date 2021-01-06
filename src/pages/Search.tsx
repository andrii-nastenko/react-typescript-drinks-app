import style from '../styles/Search.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {stateType} from "../interfaces/stateType";
import {FormEvent, useState} from "react";
import {requestSearchByName} from "../redux/drinksActions";
import {DrinksGrid} from "../components/DrinksGrid";

export function Search() {
    const dispatch = useDispatch()
    const state = useSelector((state: stateType) => state.drinks)
    const [drinkName, setDrinkName] = useState('')

    const searchHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const search = drinkName.trim()
        if (search) {
            dispatch(requestSearchByName(search))
        }
        setDrinkName('')
    }

    return (
        <div className={style.container}>
            <h2>Search drink by name</h2>
            <form onSubmit={searchHandler}>
                <input type="text" onChange={e => setDrinkName(e.target.value)} value={drinkName}/>
                <button>search</button>
            </form>
            {state.searchResult ? <DrinksGrid drinks={state.searchResult}/> : <h4>Nothing found</h4>}
        </div>
    )
}