import { useState } from "react";
import { Navigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const [publicRoute, setPublicRoute] = useState(true);

  //   return publicRoute ? <Navigate to="/marvel" /> : children;
  return publicRoute ? <Navigate to="/" /> : <Navigate to="/" />;
};
