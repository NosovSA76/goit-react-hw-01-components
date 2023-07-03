import React from "react";
import PropTypes from "prop-types";
import { Frend, Status, Avatar, Name, Section } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  return (
    <Section>
      {friends.map((item, idx) => (
        <Frend key={item.id} id={item.id} index={idx}>
          <Status>{item.isOnline}</Status>
          <Avatar>{item.avatar}</Avatar>
          <Name>{item.name}</Name>
        </Frend>
      ))}
    </Section>
  );
};

FriendList.propTypes = {
  // title: PropTypes.string,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
