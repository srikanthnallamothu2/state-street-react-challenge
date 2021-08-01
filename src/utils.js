import data from './data/data.json';

const getTransactions = () => {
    return data.transactions;
};

const filterTransactions = (names, types) => {
    let defaultData = data.transactions;
    if(names.length > 0) {
        defaultData = data.transactions.filter(transactions => names.includes(transactions.accountName));
    }
    if(types.length > 0) {
        defaultData = defaultData.filter(transactions => types.includes(transactions.transactionType));

    }
    return defaultData;
}

const getAllFilterCounts = filter => {
    return data.transactions.reduce((result, nextValue) => {
        if(result[nextValue[filter]]) {
            result[nextValue[filter]].count += 1;
        } else {
            result[nextValue[filter]] = {
                count: 1
            };
        }
        return result;
    }, {});
}


const getTransactionById = id => {
    return data.transactions.find(transaction => transaction.account === id);
}

export { getAllFilterCounts, getTransactions, filterTransactions, getTransactionById};
