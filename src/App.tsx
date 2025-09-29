import InputSearch from "./components/InputSearch"
import FooterBar from "./components/layout/FooterBar"
import MenuBar from "./components/layout/MenuBar"
import { Outlet } from "react-router"

export default function App() {
  return (<>
    <MenuBar>
      <InputSearch />
    </MenuBar>

    <Outlet />

    <FooterBar>
      footer
    </FooterBar>
  </>)
};
