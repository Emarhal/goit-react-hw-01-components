import React from "react";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <li className={styles.itemList}>
      <span
        className={friend.isOnline ? styles.avatarTrue : styles.avatarFalse}
      ></span>
      <img
        className={friend.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="150"
      />
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
};

export default FriendListItem;
