import { MARK_AS_READ } from "../constants";
export const NotificationReducer = (state, { type, payload }) => {
  switch (type) {
    case MARK_AS_READ:
      return state.map((item) =>
        !item.isRead ? { ...item, isRead: true } : item
      );

    default:
      return [...state];
  }
};
