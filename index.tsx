import React, { Suspense, lazy } from 'react'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';

import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

const Favorites = lazy(() => import("./src/components/pages/Favorites"))
const About = lazy(() => import("./src/components/pages/About"))
const Home = lazy(() => import("./src/components/pages/Home"))
const Play = lazy(() => import("./src/components/pages/Play"))
const Page404 = lazy(() => import("./src/components/pages/404"))

import PageTop from "./src/components/layout/PageTop";
import App from "./src/App";

import './src/sass/index.scss'

const pageTop = PageTop()
pageTop.init()



const root = createRoot(document.getElementById('root')!);
root.render(
    <Provider store={store}>
        <Suspense fallback={<div>Carregando...</div>}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route index element={<Home />} />
                            <Route path="play" element={<Play />} />
                            <Route path="favorites" element={<Favorites />} />
                            <Route path="about" element={<About />} />
                            <Route path="*" element={<Page404 />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Suspense>
    </Provider>
);