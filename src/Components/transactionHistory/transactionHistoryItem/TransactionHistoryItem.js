import React from "react";
import styles from "./TransactionHistoryItem.module.css";
import PropTypes from "prop-types";

const TransactionHistoryItem = ({ transaction }) => {
  return (
    <tr className={styles.bodyTable}>
      <td className={styles.bodyTableItem}>{transaction.type}</td>
      <td className={styles.bodyTableItem}>{transaction.amount}</td>
      <td className={styles.bodyTableItem}>{transaction.currency}</td>
    </tr>
  );
};
TransactionHistoryItem.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
export default TransactionHistoryItem;
