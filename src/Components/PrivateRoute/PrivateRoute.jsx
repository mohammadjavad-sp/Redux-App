import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((store) => store.login);
  return <>{isAuthenticated ? children : <Navigate to="/Redux-App/login" />}</>;
};

export default PrivateRoute;
