import React from "react"
import Main from './components/Layout/Main';
import MenuBar from "./components/Layout/MenuBar"
import Footer from "./components/Footer"
import { Outlet } from "react-router"

import './App.scss'

export default function App() {
  return (
    <>
      <MenuBar />
        <div className="main">
          <Main>
              <Outlet />
          </Main>
        </div>
      <Footer />
    </>)
};
