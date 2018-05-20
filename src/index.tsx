import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers/rootReducer";
import { loadUsers } from "./actions/userActions";

const store = createStore(rootReducer);

store.dispatch(loadUsers());

ReactDOM.render(
  <Provider store={store}>
    <Router>
       <App />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
