import UserService from "./UserService";

interface Props{
    children: JSX.Element
}

const RenderOnAuthenticated = ({ children } : Props) => (UserService.isLoggedIn()) ? children : null;

export default RenderOnAuthenticated
