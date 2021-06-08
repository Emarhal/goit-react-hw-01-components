import React from "react";
import StatisticsItem from "./statisticsItem/StatisticsItem";
import styles from "./Statistics.module.css";

const Statistics = ({ title, statisticalData }) => {
  return (
    <section class={styles.statistics}>
      <h2 class={styles.title}>{title}</h2>

      <ul class={styles.statList}>
        {statisticalData.map((stat) => (
          <StatisticsItem stat={stat} key={stat.id} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
