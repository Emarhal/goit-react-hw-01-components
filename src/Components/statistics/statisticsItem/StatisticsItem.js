import React from "react";
import styles from "./StatisticsItem.module.css";
import PropTypes from "prop-types";

const StatisticsItem = ({ stat }) => {
  return (
    <li className={styles.itemList}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  stat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
export default StatisticsItem;
