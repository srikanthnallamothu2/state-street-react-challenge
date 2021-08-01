import { createContext, useContext } from 'react';

export const appContext = createContext();

// eslint-disable-next-line react-hooks/rules-of-hooks
export const getAppContext = () => useContext(appContext);

export const initialState = {
    transactions: [],
    filterByNames: [],
    filterByTypes: [],
};

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'setTransactions': {
            return { ...state, transactions: action.data};
        }
        case 'setNameFilter': {
            return {...state, filterByNames: action.nameFilters}
        }
        case 'setTypeFilter': {
            return {...state, filterByTypes: action.typeFilters} 
        }
        default:
            return state;
    }
}