import React from "react";
import styles from "./StatisticsItem.module.css";

const StatisticsItem = ({ stat }) => {
  return (
    <li class={styles.itemList}>
      <span class="label">{stat.label}</span>
      <span class="percentage">{stat.percentage}%</span>
    </li>
  );
};

export default StatisticsItem;
