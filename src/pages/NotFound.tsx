import style from '../styles/NotFound.module.scss';
import {NavLink} from "react-router-dom";

export function NotFound() {
    return (
        <div className={style.container}>
            <p>Page was not found :(</p>
            <NavLink exact to={'/'}>
                <button>
                    Back
                </button>
            </NavLink>
        </div>
    )
}