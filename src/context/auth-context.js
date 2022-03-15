import react from "react";

const AuthContext = react.createContext({
  userIsValid: false,
});

export default AuthContext;
