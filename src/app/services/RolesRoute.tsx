import { Route } from "react-router-dom";
import UserService from "./UserService";
import NotAllowed from "./NotAllowed";

interface Props{
  path: string,
  roles: string
  element: JSX.Element
}

const RolesRoute = ({ path , roles , element }: Props) => {
  if(UserService.hasRole(roles)){
    <Route path={path} element={element} />
  }else{
    <Route path={path} element={<NotAllowed />} />
  }

}


export default RolesRoute
