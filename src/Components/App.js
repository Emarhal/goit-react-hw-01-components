import React from "react";
import data from "../data";
import FriendList from "./FriendList/FriendList";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import TransactionHistory from "./transactionHistory/TransactionHistory";
import styles from "./App.module.css";

const { user } = data;

const App = () => {
  console.log(data);
  return (
    <div className={styles.container}>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics statisticalData={data.statisticalData} title="Upload stats" />
      <FriendList friend={data.friends} />
      <TransactionHistory transactions={data.transactions} />
    </div>
  );
};

export default App;
