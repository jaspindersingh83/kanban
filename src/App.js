import React, { Component } from "react";
import "./App.css";
import Board from "./components/Board";

import reducers from '../src/reducers'

// Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxPromise from "redux-promise";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
class App extends Component {
  render() {
    return (
      <Provider
        store={createStoreWithMiddleware(
          reducers,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
      >
      <div className="App">
        <Board />
      </div>
      </Provider>
    );
  }
}

export default App;
