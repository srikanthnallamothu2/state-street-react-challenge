import { useReducer } from 'react';
import { appContext, appReducer, initialState } from './AppContext';

import AppRouter from './AppRouter';

const AppProvider = () => {

    return <appContext.Provider value={useReducer(appReducer, initialState)}>
        <AppRouter />
    </appContext.Provider>
}

export default AppProvider;