import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes'
import ReduxProvider from "./components/ReduxProvider";
import Layout from "./components/Layout";

const App = () =>
    (
        <ReduxProvider>
            <Layout>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </Layout>
        </ReduxProvider>
    );

export default App;
