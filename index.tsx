import React, { lazy } from 'react'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';

import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

const Page_Favorites = lazy(() => import("./src/components/Pages/Favorites"))
const Page_About = lazy(() => import("./src/components/Pages/About"))
const Page_Home = lazy(() => import("./src/components/Pages/Home"))
const Page_Play = lazy(() => import("./src/components/Pages/Play"))
const Page_404 = lazy(() => import("./src/components/Pages/404"))

import PageTop from "./src/components/Layout/PageTop";
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
                        <Route index element={<Page_Home />} />
                        <Route path="play" element={<Page_Play />} />
                        <Route path="favorites" element={<Page_Favorites />} />
                        <Route path="about" element={<Page_About />} />
                        <Route path="*" element={<Page_404 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </PersistGate>
    </Provider>
);