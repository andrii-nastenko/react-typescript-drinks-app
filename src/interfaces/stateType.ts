import {rootReducer} from "../redux/store";

type rootReducerType = typeof rootReducer
export type stateType = ReturnType<rootReducerType>