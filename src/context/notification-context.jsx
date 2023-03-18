import { createContext, useContext, useReducer } from "react";
import { data } from "../data";
import { NotificationReducer } from "../reducer/NotificationReducer";
const NotificationContext = createContext(data);
export const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NotificationReducer, data);
  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
};
export const useNotification = () => useContext(NotificationContext);
