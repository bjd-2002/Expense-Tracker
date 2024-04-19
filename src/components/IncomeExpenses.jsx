import React, {useContext} from 'react'
import { TransactionContext } from '../context/Context';

function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}
export const IncomeExpenses = () =>  {
  const { transactions } = useContext(TransactionContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );
  return (
    <div>
        Income: {moneyFormatter(income)} <br />
        Expense: {moneyFormatter(expense)}
    </div>
  )
}

