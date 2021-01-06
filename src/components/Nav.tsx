import style from '../styles/Nav.module.scss';
import {NavLink} from "react-router-dom";

export function Nav() {
    return (
        <nav className={style.container}>
            <NavLink activeClassName={style.active} exact to={'/'}>Drinks</NavLink>
            <NavLink activeClassName={style.active} to={'/search'}>Search</NavLink>
        </nav>
    )
}