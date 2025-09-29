import InputSearch from "./components/InputSearch"
import FooterBar from "./components/layout/FooterBar"
import Main from "./components/layout/Main"
import MenuBar from "./components/layout/MenuBar"
import { Outlet } from "react-router"

export default function App() {
  return (<>
    <MenuBar>
      <InputSearch />
    </MenuBar>

    <Main>
      <Outlet />
    </Main>

    <FooterBar>
      footer
    </FooterBar>
  </>)
};
