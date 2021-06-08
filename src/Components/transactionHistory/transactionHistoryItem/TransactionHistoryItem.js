import React from "react";
import styles from "./TransactionHistoryItem.module.css";

const TransactionHistoryItem = ({ transaction }) => {
  return (
    <tr class={styles.bodyTable}>
      <td class={styles.bodyTableItem}>{transaction.type}</td>
      <td class={styles.bodyTableItem}>{transaction.amount}</td>
      <td class={styles.bodyTableItem}>{transaction.currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;
