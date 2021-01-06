import {useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import style from './styles/App.module.scss';
import {Nav} from "./components/Nav";
import {Drinks} from "./pages/Drinks";
import {Search} from "./pages/Search";
import {NotFound} from "./pages/NotFound";
import {useSelector} from "react-redux";
import {stateType} from "./interfaces/stateType";
import {Preloader} from "./components/Preloader";
import ScrollToTop from "react-scroll-to-top";

export function App() {
    const state = useSelector((state: stateType) => state.drinks)

    useEffect(() => {
        window.addEventListener("unhandledrejection", (reason: PromiseRejectionEvent) => {
            alert(reason.reason.message)
        })
    }, [])

    return (
        <main className={style.container}>
            <Nav/>
            <Switch>
                <Route exact path={'/'} component={Drinks}/>
                <Route path={'/search'} component={Search}/>
                <Route component={NotFound}/>
            </Switch>
            <ScrollToTop top={150} smooth style={{right: '20px'}}/>
            {state.isFetching ? <Preloader/> : null}
        </main>
    )
}