import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from 'react-redux';
import UserService from '../../app/services/UserService';
import { application, calculator, logout, mainLogo, note, profile, setting, } from '../../assets/icons';
import { CurrentDTZ } from '../sharedComponent/CurrentDTZ';
import { modifyAppStatus } from '../../features/apps/appSlice';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="menu-bar">
            <div className="left">
                <Dropdown>
                    <Dropdown.Toggle id="st-menu">
                        <span className="fa fa-windowss start-menu">
                            <img src={mainLogo} alt="startmenu" />
                        </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item
                            onClick={() => dispatch(modifyAppStatus({ mode: "OPEN", value: true, app: 'APPLICATIONS' }))}>
                            <img src={application} className="icon-img" alt="" />
                            Applications
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => dispatch(modifyAppStatus({ mode: "OPEN", value: true, app: 'NOTE' }))}>
                            <img src={note} className="icon-img" alt="" />
                            Sticky Note
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => dispatch(modifyAppStatus({ mode: "OPEN", value: true, app: 'CALCULATOR' }))}>
                            <img src={calculator} className="icon-img" alt="" />
                            Calculator
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => navigate('/')} >
                            <img src={logout} className="icon-img" alt="" />
                            Logout
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="right">
                <div className="menu-time" >
                    <CurrentDTZ />
                </div>
            </div>
        </div>
    );
}

export default Navbar;