import React from "react";
import { MARK_AS_READ } from "../constants";
import { useNotification } from "../context/notification-context";
import { getUnread } from "../utils/getUnread";

export const NotificationHeader = () => {
  const { state, dispatch } = useNotification();
  const count = getUnread(state);
  const handleMarkAsRead = () => dispatch({ type: MARK_AS_READ });
  return (
    <div className="flex justify-between items-center">
      <header className="text-xl font-bold flex items-center">
        Notifications{" "}
        <span className="bg-Blue rounded-sm text-White text-xs px-2 ml-2">
          {count}
        </span>
      </header>
      <button
        onClick={handleMarkAsRead}
        className="text-sm font-medium hover:text-Blue text-darkGrayishBlue">
        Mark all as read
      </button>
    </div>
  );
};
