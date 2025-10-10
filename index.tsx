import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';

import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import Favorites from "./src/components/pages/Favorites";
import About from "./src/components/pages/About";
import Home from "./src/components/pages/Home";

import PageTop from "./src/components/layout/PageTop";
import App from "./src/App";

import './src/sass/index.scss'

const pageTop = PageTop()
pageTop.init()

const root = createRoot(document.getElementById('root')!);
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path="favorites" element={<Favorites />} />
                        <Route path="about" element={<About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </PersistGate>
    </Provider>
);