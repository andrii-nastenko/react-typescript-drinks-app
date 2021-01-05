import {useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import style from './styles/App.module.scss';
import {Nav} from "./components/Nav";
import {Cocktails} from "./pages/Cocktails";
import {Details} from "./pages/Details";
import {NotFound} from "./pages/NotFound";

export function App() {
    useEffect(() => {
        window.addEventListener("unhandledrejection", (reason: PromiseRejectionEvent) => {
            alert(reason.reason.message)
        })
    }, [])

    return (
        <main className={style.container}>
            <Nav/>
            <Switch>
                <Route exact path={'/'} component={Cocktails}/>
                <Route path={'/details'} component={Details}/>
                <Route component={NotFound}/>
            </Switch>
        </main>
    )
}
