import UserService from "./UserService";

interface Props{
    children: JSX.Element
}

const RenderOnAnonymous = ({ children }: Props) => (!UserService.isLoggedIn()) ? children : null;

export default RenderOnAnonymous
