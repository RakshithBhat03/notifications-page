import React from "react";
import { JOIN_GROUP, LEAVE_GROUP, MESSAGE } from "../constants";
import { Action } from "./Action";
import { NotificationDot } from "./NotificationDot";
export const NotificationCard = ({ data }) => {
  const { name, action, url, isRead, timeRecieved } = data;
  return (
    <div
      className={`w-full px-4 py-3 flex relative gap-3 ${
        isRead ? "bg-inherit" : "bg-veryLightGrayishBlue"
      } rounded-md`}>
      <figure className="w-10 h-10">
        <img className="w-full h-full " src={url} alt="avatar" />
      </figure>
      <div className="break-words w-[90%]">
        <span className="font-bold text-sm hover:text-Blue hover:cursor-pointer mr-1">
          {name}
        </span>
        <Action action={action} />
        {data.message && action !== MESSAGE && (
          <span
            className={`font-semibold text-sm ${
              action === (JOIN_GROUP || LEAVE_GROUP)
                ? "text-Blue"
                : "text-darkGrayishBlue"
            } hover:text-Blue hover:cursor-pointer mr-1`}>
            {data.message}
          </span>
        )}
        {data.thumbnail && (
          <figure className="w-9 h-9 absolute bottom-1/4 right-2 rounded-md border-2 border-White hover:cursor-pointer hover:border-lightGrayishBlueOne">
            <img
              src={data.thumbnail}
              className="w-full h-full"
              alt="thumbnail"
            />
          </figure>
        )}
        {!isRead && <NotificationDot />}
        <span className="block text-sm font-thin text-darkGrayishBlue">
          {timeRecieved}
        </span>
        {action === MESSAGE && (
          <span className="block px-4 py-3 mt-2 border rounded-md font-light text-darkGrayishBlue text-sm border-lightGrayishBlueOne hover:bg-lightGrayishBlueTwo hover:cursor-pointer">
            {data?.message}
          </span>
        )}
      </div>
    </div>
  );
};
