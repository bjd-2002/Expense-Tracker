import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { TransactionContext } from '../context/Context';

export const TransactionList = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <>
      <h3>History</h3>
      <ul >
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}