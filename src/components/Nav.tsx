import style from '../styles/Nav.module.scss';
import {NavLink} from "react-router-dom";

const classNameFunc = ({isActive}: { isActive: boolean }) => (isActive ? "active_link" : "");

export function Nav() {
    return (
        <nav className={style.container}>
            <NavLink className={classNameFunc} to={'/'}>Drinks</NavLink>
            <NavLink className={classNameFunc} to={'/search'}>Search</NavLink>
        </nav>
    )
}