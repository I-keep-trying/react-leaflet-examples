import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import {Provider} from "react-redux";
//import {createStore} from "redux";
//import {rootReducer} from "./store/Reducer";
import './index.css';
import 'antd/dist/antd.min.css';
import 'leaflet/dist/leaflet.css';

//const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
