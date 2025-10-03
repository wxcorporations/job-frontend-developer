import { createRoot } from "react-dom/client";
import App from "./src/App";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./src/components/pages/Home";
import Favorites from "./src/components/pages/Favorites";
import About from "./src/components/pages/About";

import PageTop from "./src/components/layout/PageTop";

const pageTop = PageTop()
pageTop.init()

import './style.scss'


const root = createRoot(document.getElementById('root')!);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home/>} />
                <Route path="favorites" element={<Favorites/>} />
                <Route path="about" element={<About/>} />
            </Route>
        </Routes>
    </BrowserRouter>
);


// Unused devDependencies
// * @babel/preset-env
// * @babel/preset-react
// * @babel/preset-typescript
// * @typescript-eslint/parser
// * webpack-cli