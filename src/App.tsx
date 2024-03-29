import {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import style from './styles/App.module.scss';
import {Nav} from "./components/Nav";
import {Drinks} from "./pages/Drinks";
import {Search} from "./pages/Search";
import {NotFound} from "./pages/NotFound";
import {useSelector} from "react-redux";
import {stateType} from "./interfaces/stateType";
import {Preloader} from "./components/Preloader";
import ScrollToTop from "react-scroll-to-top";
import {DetailsModal} from "./components/DetailsModal";

export function App() {
    const state = useSelector((state: stateType) => state.drinks);
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("unhandledrejection", (reason: PromiseRejectionEvent) => {
            alert(reason.reason.message);
        });
    }, []);

    return (
        <main className={style.container}>
            <Nav/>
            <Routes>
                <Route path="/" element={<Drinks setIsOpen={setIsOpen}/>}/>
                <Route path="/search" element={<Search setIsOpen={setIsOpen}/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <DetailsModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
            <ScrollToTop top={150} smooth style={{right: '20px'}}/>
            {state.isFetching ? <Preloader/> : null}
        </main>
    );
}
