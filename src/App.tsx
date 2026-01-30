import React, { Suspense } from "react"
import Main from './components/Layout/Main';
import MenuBar from "./components/Layout/MenuBar"
import Footer from "./components/Footer"
import { Outlet } from "react-router"
import { ToastContainer } from "react-toastify";

import './App.scss'
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <>
      <ErrorBoundary>
        <MenuBar />
        <div className="main">
          <Main>
            <Suspense fallback={<div>Carregando...</div>}>
              <Outlet />
            </Suspense>
          </Main>
        </div>
        <Footer />
      </ErrorBoundary>
      <ToastContainer />
    </>)
};
