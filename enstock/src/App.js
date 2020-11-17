import React, { createContext, useState, useEffect } from 'react';
import {getListStores} from "./services/services";
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css';
import './App.css';
import RoutersDom from './routers/RoutersDom';

export const GlobalContext = createContext();

const App = _ => {

  const [objGlobal, setObjGlobal] = useState([]);

    useEffect(() => {
        getListStores().then((rpta) => {
          setObjGlobal(rpta);
        });
      }, []);

  return (
  <GlobalContext.Provider value={objGlobal}>
  <RoutersDom />
  </GlobalContext.Provider>
    )
}

export default App;
