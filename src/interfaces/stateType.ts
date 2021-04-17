import {rootReducer} from "../redux/store";
import {createStore, Store} from 'redux';

type RootState = ReturnType<typeof rootReducer>;
const store: Store<RootState> = createStore(rootReducer);
export type stateType = ReturnType<typeof store.getState>;