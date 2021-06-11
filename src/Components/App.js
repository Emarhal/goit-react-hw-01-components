import React from "react";
import data from "../data";
import FriendList from "./FriendList/FriendList";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import TransactionHistory from "./transactionHistory/TransactionHistory";
import styles from "./App.module.css";

const { user } = data;

const App = () => {
  return (
    <div className={styles.container}>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data.statisticalData} title="Upload stats" />
      <FriendList friends={data.friends} />
      <TransactionHistory items={data.transactions} />
    </div>
  );
};

export default App;
