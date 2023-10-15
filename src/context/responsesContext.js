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
const initalTimeState = "";
const timeReducer = (state, action) => {
  switch (action.type) {
    case "updateTime":
      return action.payload;
    default:
      return state;
  }
};
export const ResponsesContext = createContext();
export const ResponsesProvider = ({ children }) => {
  const [responses, dispatch] = useReducer(reducer, initialState);
  const [timeElapsed, timeElapsedDispatch] = useReducer(
    timeReducer,
    initalTimeState
  );
  return (
    <ResponsesContext.Provider
      value={{
        responses,
        responseDispatch: dispatch,
        timeElapsed,
        timeElapsedDispatch,
      }}
    >
      {children}
    </ResponsesContext.Provider>
  );
};
