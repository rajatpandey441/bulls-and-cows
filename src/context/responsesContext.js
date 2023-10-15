import { createContext, useContext, useReducer, useState } from "react";
const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "addResponse":
      return [...state, action.payload];
    default:
      return state;
  }
};
export const ResponsesContext = createContext();
export const ResponsesProvider = ({ children }) => {
  const [responses, dispatch] = useReducer(reducer, initialState);
  return (
    <ResponsesContext.Provider
      value={{ responses, responseDispatch: dispatch }}
    >
      {children}
    </ResponsesContext.Provider>
  );
};
