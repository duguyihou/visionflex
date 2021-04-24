import React from "react";
import { AvatarImage } from "./style";
import { Link } from "react-router-dom";

const Avatar = ({ avatarUrl }) => {
  return (
    <Link to='/photo'>
      <AvatarImage avatarUrl={avatarUrl} />
    </Link>
  );
};

export default Avatar;
