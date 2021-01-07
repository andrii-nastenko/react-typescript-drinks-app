import {useDispatch, useSelector} from "react-redux";
import {stateType} from "../interfaces/stateType";
import ReactModal from 'react-modal';
import {setDrinkDetails} from "../redux/drinksActions";

interface ModalType {
    modalIsOpen: boolean
    setIsOpen: (modalIsOpen: boolean) => void
}

export function DetailsModal({modalIsOpen, setIsOpen}: ModalType) {
    const dispatch = useDispatch()
    const drinkDetails = useSelector((state: stateType) => state.drinks.drinkDetails)

    const closeDetailsHandler = () => {
        dispatch(setDrinkDetails([{
            strDrink: '',
            strDrinkThumb: '',
            strAlcoholic: '',
            strInstructions: '',
            idDrink: ''
        }]))
        setIsOpen(false)
    }

    return (
        <ReactModal
            isOpen={modalIsOpen}
            onAfterOpen={() => {
            }}
            onRequestClose={() => setIsOpen(false)}
            ariaHideApp={false}
            style={{overlay: {backgroundColor: 'rgba(0, 0, 0, 0.5)'}}}
        >
            <button style={{cursor: 'pointer'}} onClick={closeDetailsHandler}>Close</button>
            <h1 style={{textAlign: 'center'}}>{drinkDetails.strDrink}</h1>
            <p style={{textAlign: 'center'}}>{drinkDetails.strInstructions}</p>
            <img style={{margin: 'auto', display: 'block', maxWidth: '100%', width: '400px'}}
                 src={drinkDetails.strDrinkThumb} alt={drinkDetails.strDrink}/>
        </ReactModal>
    )
}