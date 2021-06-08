import React from "react";
import TransactionHistoryItem from "./transactionHistoryItem/TransactionHistoryItem";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  console.log(transactions);
  return (
    <table class={styles.transactionHistory}>
      <thead>
        <tr>
          <th class={styles.mainTable}>Type</th>
          <th class={styles.mainTable}>Amount</th>
          <th class={styles.mainTable}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TransactionHistoryItem
            transaction={transaction}
            key={transaction.id}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
