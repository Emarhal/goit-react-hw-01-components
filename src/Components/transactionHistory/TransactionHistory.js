import React from "react";
import TransactionHistoryItem from "./transactionHistoryItem/TransactionHistoryItem";
import styles from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th className={styles.mainTable}>Type</th>
          <th className={styles.mainTable}>Amount</th>
          <th className={styles.mainTable}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((transaction) => (
          <TransactionHistoryItem
            transaction={transaction}
            key={transaction.id}
          />
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TransactionHistory;
