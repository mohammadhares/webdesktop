import UserService from "./UserService";
import { ReactNode } from "react";

const AuthRoute = (props: { children: ReactNode }) => {
  const { children } = props;
  const authed = UserService.isLoggedIn();
  return authed ? children : UserService?.doLogin();
}


export default AuthRoute
