import ReactDOM from "react-dom/client";
import {App} from "./App";
import { BrowserRouter } from "react-router-dom";
import {reportWebVitals} from "./reportWebVitals";
//declare reportWebVitals require("./reportWebVitals");


const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
  
    <BrowserRouter>
      <App/>
    </BrowserRouter>

);

reportWebVitals();
