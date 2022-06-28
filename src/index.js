import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './utils/rootSaga';
import rootReducer from './utils/rootReducer';
import { Provider } from 'react-redux';
import {configureStore} from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import MaterialThemeProvider from "./components/contexts/ThemeContext";

const sagaMiddleware = createSagaMiddleware();

//'sagaMiddleware' to used apply middlewares to our store — sagas
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>  [...getDefaultMiddleware({
        serializableCheck: false
    }), sagaMiddleware],
    devTools: true
});
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);


ReactDOM.render(
      <Provider store={store}>
          <PersistGate persistor={persistor}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MaterialThemeProvider>
                <App />
              </MaterialThemeProvider>
            </LocalizationProvider>
          </PersistGate>
      </Provider>,
  document.getElementById('root')
);
