import "bootstrap/dist/css/bootstrap.min.css";

import { AppProps } from "next/app";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { rootReducer } from "../store";

// Create Redux store.
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;