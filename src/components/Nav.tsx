import style from '../styles/Nav.module.scss';
import {NavLink} from "react-router-dom";

export function Nav() {
    return (
        <nav className={style.container}>
            <NavLink activeClassName={style.active} exact to={'/'}>Cocktails</NavLink>
            <NavLink activeClassName={style.active} to={'/details'}>Details</NavLink>
        </nav>
    )
}