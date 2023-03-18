import React from "react";
import { NotificationCard } from "./NotificationCard";
import { NotificationHeader } from "./NotificationHeader";
import { useNotification } from "../context/notification-context";
export const Notification = () => {
  const { state } = useNotification();
  return (
    <div className="w-[40rem] min-h-auto md:max-h-[80%] overflow-y-auto rounded-md p-4 md:p-6 bg-White">
      <div className="flex flex-col h-full gap-5">
        <NotificationHeader />
        <div className="h-full overflow-y-auto space-y-2">
          {state.map((item) => (
            <NotificationCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
