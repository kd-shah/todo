import ReactDOM from "react-dom/client";
import {App} from "./App";
import { BrowserRouter } from "react-router-dom";
import {reportWebVitals} from "./reportWebVitals";
import { Provider } from "react-redux";
import {store} from "Store";



const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
    

);

reportWebVitals();
