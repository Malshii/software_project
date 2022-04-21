import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from "react-router-dom";
import App from '../src/App';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.render(
  <React.StrictMode>   
      <App />  
  </React.StrictMode>,
  document.getElementById('root')
);


// import { Provider } from 'react-redux';
// import createSagaMiddleware from 'redux-saga';
// import { applyMiddleware, createStore } from 'redux';
// import rootReducers from './utils/rootReducer';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { persistStore } from 'redux-persist';
// import rootSaga from './utils/rootSaga';
// import { PersistGate } from 'redux-persist/integration/react';
//import { BrowserRouter } from 'react-router-dom';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//   rootReducers,
//   composeWithDevTools(applyMiddleware(sagaMiddleware))
// );
// const persister = persistStore(store);
// sagaMiddleware.run(rootSaga);

// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate persistor={persister}>
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById('root')
// );
