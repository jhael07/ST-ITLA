import { createContext } from "react";

export const context = createContext();

const ContextProvider = ({ children }) => {
  return <context.Provider>{children}</context.Provider>;
};

export default ContextProvider;
