import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getTransactions, filterTransactions } from '../../utils';
import { getAppContext } from '../AppContext';
import { nameFilters, typeFilters } from '../constants';
/**
 * View shows all teh transactions with filters.
 * @returns React component
 */
const ListView = () => {
    const [state, dispatch] = getAppContext();
    const { transactions, filterByNames, filterByTypes } = state;


    const nameFilterUpdated = event => {
        if(event.target.checked) {
            dispatch({type: 'setNameFilter', nameFilters: [...filterByNames, ...[event.target.name]]})
        } else {
            const updated = filterByNames.filter(filter => filter !== event.target.name);
            dispatch({type: 'setNameFilter', nameFilters: updated })
        }
    };

    const typeFilterUpdated = event => {
        if(event.target.checked) {
            dispatch({type: 'setTypeFilter', typeFilters: [...filterByTypes, ...[event.target.name]]})
        } else {
            const updated = filterByTypes.filter(filter => filter !== event.target.name);
            dispatch({type: 'setTypeFilter', typeFilters: updated })
        }
    };

    useEffect(() => {
        const filteredResult = filterTransactions(filterByNames, filterByTypes);
        dispatch({type: 'setTransactions', data: filteredResult});
    }, [filterByNames, filterByTypes, dispatch]);

    useEffect(() => {
        if(transactions.length === 0) {
            const result = getTransactions();
            dispatch({type: 'setTransactions', data: result});
        }
    }, [transactions, dispatch]);
    return <>
        <header> <h2>My Transactions </h2></header>
        <div className="transactions-view">
            
            <div className="filter-view">
                <h3>Filters</h3>
                <section>
                    <h4>Account Name</h4>
                    {
                        nameFilters.map(filter => 
                            <div key={filter}>
                            <label><input id={filter} type="checkbox" aria-label={filter} name={filter} checked={filterByNames.includes(filter)} onChange={nameFilterUpdated} />
                                {filter}
                            </label>
                            </div>
                            )
                    }
                </section>
                <section>
                    <h4>Transaction Type</h4>
                        {
                            typeFilters.map(filter => 
                                <div key={filter.value}>
                                <label>
                                    <input id={filter.value} type="checkbox" aria-label={filter.value} name={filter.value} checked={filterByTypes.includes(filter.value)} onChange={typeFilterUpdated} />
                                    {filter.label}
                                </label>
                                </div>
                            )
                        }
                </section>
            </div>
            <div className="table-view">
                <table>
                    <thead>
                        <tr>
                            <th>ACCOUNT NO.</th>
                            <th>ACCOUNT NAME</th>
                            <th>CURRENCY</th>
                            <th>AMOUNT</th>
                            <th>TRANSACTION TYPE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions.map(transaction => 
                                <tr key={transaction.account}>
                                    <td><Link to={{pathname: `/${transaction.account}/details`}}>{transaction.account}</Link></td>
                                    <td>{transaction.accountName}</td>
                                    <td>{transaction.currencyCode}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.transactionType}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
};

export default ListView;