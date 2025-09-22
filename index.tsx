import { createRoot } from "react-dom/client";
import App from "./src/App";
import './style.scss'

const root = createRoot(document.getElementById('root')!);
root.render(<App />);