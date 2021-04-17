import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';
import 'normalize.css';
import './styles/index.scss';
import {App} from './App';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {BrowserRouter} from 'react-router-dom';

const root = document.getElementById('root');

const getBasename = () => {
    if (window.location.hostname === 'andrii-nastenko.github.io') {
        return '/react-typescript-drinks-app/';
    }
    return '/';
};

if (root) {
    const appRoot = createRoot(root);
    appRoot.render(
        <StrictMode>
            <Provider store={store}>
                <BrowserRouter basename={getBasename()}>
                    <App/>
                </BrowserRouter>
            </Provider>
        </StrictMode>
    );
} else {
    console.error('Root element not found. Make sure there is an element with id "root" in your HTML.');
}