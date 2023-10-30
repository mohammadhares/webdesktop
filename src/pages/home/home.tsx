import { useSelector } from "react-redux";
import { menus } from "../../app/data/data";
import { defaultBackground, defaultBanner, mainBackground } from "../../assets/images/backgrounds";
import { AppMainState } from "../../features/apps/app.types";
import AllWindows from "../../common/desktop/AllWindows";
import Navbar from "../../common/desktop/Navbar";
import MenuItem from "../../common/sharedComponent/MenuItem";
import TaskBarIcon from "../../common/sharedComponent/TaskBarIcon";
import Clock from "../Clocks/Clock";


const Home = () => {
    const apps = useSelector((state: AppMainState) => state.apps.apps);
    return (
        <main id="home">
            <Navbar />
            <div className='container-fluid'>
                <div className="col-1 mt-5 right-menus" style={{ float: 'right' }}>
                    {menus.map((menu, index) => (
                        <MenuItem
                            key={index}
                            img={menu.img}
                            name={menu.name}
                            path={menu.path}
                        />
                    ))}
                </div>
                <AllWindows />
                <Clock />
                <div className="row">
                    <div className="taskbar">
                        {apps.map((item, index) => (
                            <TaskBarIcon
                                key={index}
                                open={item.open}
                                title={item.title}
                                icon={item.icon}
                                min={item.min}
                                app={item.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;