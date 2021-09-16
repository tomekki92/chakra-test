import React from "react";
import UserContext from "./userContext";

const userState = (props) => {
  return (
    <UserContext.Provider
      value={{
        users: "State test",
        colorSecondary: {
          light: "gray.700",
          dark: "gray.400"
        },
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default userState;
