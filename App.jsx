import React from "react";
import Immutable from "immutable";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import {
  routerMiddleware,
  ConnectedRouter
} from "connected-react-router/immutable";
import { ErrorBoundary } from "./ErrorBoundary";
import rootReducer from "./reducers";
import Layout from "./layout";

const history = createBrowserHistory();
const initialState = Immutable.Map({});
const store = createStore(
  rootReducer(history),
  initialState,
  compose(applyMiddleware(routerMiddleware(history), thunk))
);

export default _ => (
  <ErrorBoundary>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout />
      </ConnectedRouter>
    </Provider>
  </ErrorBoundary>
);
