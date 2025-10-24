import React from "react"
import Main from './components/layout/Main';
import MenuBar from "./components/layout/MenuBar"
import FooterRef from "./components/footer"
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
      <FooterRef />
    </>)
};
