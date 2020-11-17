import React, { useReducer } from 'react'
import StoresContext from './StoresContext'

const storesReducer = (stateActual, action) => {
    if(action.type === "SET_GLOBAL_STORE"){
        return {
            ...stateActual,
            globalStores:action.data,
        }
    }
    return stateActual;
}

const StoresState = (props) => {

    const [state, dispatch] = useReducer(storesReducer, {
        globalStores: null,
        
    });

    const selectStoreGlobal = (objCategory) => {
        dispatch({
            type: "SET_GLOBAL_STORE",
            data: objCategory,
        })
    }


    return (
        <StoresContext.Provider value={{
            globalStores: state.globalStores,
            selectStoreGlobal: selectStoreGlobal,
            }}>
            {props.children}
        </StoresContext.Provider>
    )
}

export default StoresState
