import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes'
import ReduxProvider from "./components/ReduxProvider";

const App = () =>
    (
        <ReduxProvider>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </ReduxProvider>
    );

export default App;
