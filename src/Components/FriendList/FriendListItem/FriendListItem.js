import React from "react";
import styles from "./FriendListItem.module.css";
import PropTypes from "prop-types";

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

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

FriendListItem.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
};

export default FriendListItem;
