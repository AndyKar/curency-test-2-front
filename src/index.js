import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
//import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'

import App from "./App"

import "assets/scss/black-dashboard-react.scss";
import "styles/main.scss";
//import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
//import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

ReactDOM.render(
    <Provider store={store} >
      <ThemeContextWrapper>
        <BackgroundColorWrapper>
          <BrowserRouter>
            <Switch>
                <Route path="/login" render={(props) => <App {...props} />} />
                <Redirect from="/user/login" to="/login" />

                <Route path="/register" render={(props) => <App {...props} />} />
                <Redirect from="/user/register" to="/register" />

                <Route path="/forgotten" render={(props) => <App {...props} />} />
                <Redirect from="/user/forgotten" to="/forgotten" />

                <Route path="/cart" render={(props) => <App {...props} />} />
                <Redirect from="/user/cart" to="/cart" />

                <Route path="/checkout" render={(props) => <App {...props} />} />
                <Redirect from="/user/checkout" to="/checkout" />

                <Route path="/success" render={(props) => <App {...props} />} />
                <Redirect from="/user/success" to="/success" />

                <Route path="/wish" render={(props) => <App {...props} />} />
                <Redirect from="/user/wish" to="/wish" />

                <Route path="/logout" render={(props) => <App {...props} />} />
                <Redirect from="/user/logout" to="/logout" />

                <Route path="/account" render={(props) => <App {...props} />} />
                <Redirect from="/user/account" to="/account" />
                <Redirect from="/user" to="/account" />

                <Route path="/profile" render={(props) => <App {...props} />} />
                <Redirect from="/user/profile" to="/profole" />

                <Route path="/contacts" render={(props) => <App {...props} />} />
                <Redirect from="/user/addressest" to="/contacts" />

                <Route path="/orders" render={(props) => <App {...props} />} />
                <Redirect from="/user/orders" to="/orders" />

                <Route path="/rewards" render={(props) => <App {...props} />} />
                <Redirect from="/user/rewards" to="/rewards" />

                <Redirect from="*" to="/account" />
            </Switch>
          </BrowserRouter>
        </BackgroundColorWrapper>
      </ThemeContextWrapper>
    </Provider>,
  document.getElementById("root")
);
