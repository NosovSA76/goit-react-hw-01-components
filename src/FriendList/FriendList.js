import React from "react";
import PropTypes from "prop-types";
import {
  Friend,
  Avatar,
  Name,
  StatusOn,
  StatusOf,
  Section,
} from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  return (
    <Section>
      {friends.map((item, idx) => (
        <Friend key={item.id} id={item.id} index={idx}>
          {item.isOnline ? <StatusOn> </StatusOn> : <StatusOf> </StatusOf>}
          <Avatar src={item.avatar} alt="Friend" />
          <Name>{item.name}</Name>
        </Friend>
      ))}
    </Section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
