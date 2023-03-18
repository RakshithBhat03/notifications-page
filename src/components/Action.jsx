import React from "react";
import {
  COMMENT,
  FOLLOW,
  JOIN_GROUP,
  LEAVE_GROUP,
  MESSAGE,
  REACTION,
} from "../constants";

export const Action = ({ action }) => {
  switch (action) {
    case REACTION:
      return (
        <span className="font-normal text-sm text-darkGrayishBlue mr-1">
          reacted to your recent post
        </span>
      );
    case FOLLOW:
      return (
        <span className="font-normal text-sm text-darkGrayishBlue mr-1">
          followed you
        </span>
      );
    case JOIN_GROUP:
      return (
        <span className="font-normal text-sm text-darkGrayishBlue mr-1">
          has joined your group
        </span>
      );
    case MESSAGE:
      return (
        <span className="font-normal text-sm text-darkGrayishBlue mr-1">
          sent you a private message
        </span>
      );
    case COMMENT:
      return (
        <span className="font-normal text-sm text-darkGrayishBlue mr-1">
          commented on your picture
        </span>
      );
    case LEAVE_GROUP:
      return (
        <span className="font-normal text-sm text-darkGrayishBlue mr-1">
          left the group
        </span>
      );

    default:
      return (
        <span className="font-normal text-sm text-darkGrayishBlue mr-1">
          reacted to your recent post
        </span>
      );
  }
};
