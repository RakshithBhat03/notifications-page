import {
  COMMENT,
  FOLLOW,
  JOIN_GROUP,
  LEAVE_GROUP,
  MESSAGE,
  REACTION,
} from "./constants";
import { v4 as uuid } from "uuid";
export const data = [
  {
    id: uuid(),
    name: "Mark Webber",
    action: REACTION,
    url: "./assets/images/avatar-mark-webber.webp",
    message: "My first tournament today!",
    isRead: false,
    timeRecieved: "1m ago",
  },
  {
    id: uuid(),
    name: "Angela Gray",
    action: FOLLOW,
    url: "./assets/images/avatar-angela-gray.webp",
    message: "",
    isRead: false,
    timeRecieved: "5m ago",
  },
  {
    id: uuid(),
    name: "Jacob Thompson",
    action: JOIN_GROUP,
    url: "./assets/images/avatar-jacob-thompson.webp",
    message: "Chess Club",
    isRead: false,
    timeRecieved: "1day ago",
  },
  {
    id: uuid(),
    name: "Rizky Hasanuddin",
    action: MESSAGE,
    url: "./assets/images/avatar-rizky-hasanuddin.webp",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game",
    isRead: true,
    timeRecieved: "5 days ago",
  },
  {
    id: uuid(),
    name: "Kimberly Smith",
    action: COMMENT,
    url: "./assets/images/avatar-kimberly-smith.webp",
    isRead: true,
    thumbnail: "./assets/images/image-chess.webp",
    timeRecieved: "1week ago",
  },
  {
    id: uuid(),
    name: "Nathan Peterson",
    action: REACTION,
    url: "./assets/images/avatar-nathan-peterson.webp",
    message: "5 end-game strategies to increase your win rate",
    isRead: true,
    timeRecieved: "2 weeks ago",
  },
  {
    id: uuid(),
    name: "Anna Kim",
    action: LEAVE_GROUP,
    url: "./assets/images/avatar-anna-kim.webp",
    message: "Chess Club",
    isRead: true,
    timeRecieved: "2 weeks ago",
  },
];
