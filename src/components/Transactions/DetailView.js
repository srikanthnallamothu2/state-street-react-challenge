import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { getTransactionById } from '../../utils';

/**
 * View shows details of each transaction.
 * @returns React component
 */

const DetailsView = () => {
    const { accountNumber } = useParams();

    const [details, setDetails] = useState({});
    useEffect(() => {
        const result = getTransactionById(accountNumber);
        setDetails(result);
    }, [accountNumber])
    return <div className="details-view">
        <header>
            <h2>Transaction {details.account}</h2>
        </header>
        <section>
            <div>
                <span>Account No.:</span><span>{details.account}</span>
            </div>
            <div>
                <span>Account Name:</span><span>{details.accountName}</span>
            </div>
            <div>
                <span>Currency Code:</span><span>{details.currencyCode}</span>
            </div>
            <div>
                <span>Amount:</span><span>{details.amount}</span>
            </div>
            <div>
                <span>Transaction Type:</span><span>{details.transactionType}</span>
            </div>
        </section>
        <Link to="/">Back to List</Link>
    </div>
}

export default DetailsView;