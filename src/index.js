import React, {createContext} from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';
// import './index.css';
import App from './App';


export const Context = createContext(null)

// const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()
  }}>
        <App />
  </Context.Provider>

);


