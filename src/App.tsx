import InputSearch from "./components/InputSearch"
import FooterBar from "./components/layout/FooterBar"
import Main from "./components/layout/Main"
import MenuBar from "./components/layout/MenuBar"
import { Provider } from 'react-redux';
import { Outlet } from "react-router"
import { store } from '../store/store';

import { useSelector } from "react-redux";


export default function App() {
  

  return (<>
    <Provider store={store}>
      <MenuBar>
        {/* <InputSearch search={(value: string) => console.log('======> ', value)} /> */}
      </MenuBar>

      <Main>
        <Outlet />
      </Main>

      <FooterBar />
    </Provider>
  </>)
};
