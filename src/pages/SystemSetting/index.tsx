import { faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './../../style/systemsetting/setting.css';
import AAReports from "./AAReports";
import About from "./About";
import { useState } from "react";
import ConnectedServices from "./ConnectedServices";
import SystemEditor from "./SystemEditor";

const SystemSettingMain = () => {

    const [listItem, setListItem] = useState('aar');

    return (
        <div className="main-content">
            <div className="flex-stretchs" style={{ flex: "1 1 100%", alignItems: 'stretch', display: 'flex' }}>
                <aside className="settings-sidebar">
                    <div className="fixed">
                        <h3 className="mb-16">
                            <span>
                                <FontAwesomeIcon icon={faTools} />
                                System Settings
                            </span>
                        </h3>
                        <nav className="settings-nav text-right">
                            <div
                                onClick={() => setListItem('aar')}
                                className={`single-nav ${listItem === 'aar' && 'active'}`}>
                                <span>After Action Report</span>
                            </div>
                            <div
                                onClick={() => setListItem('cns')}
                                className={`single-nav ${listItem === 'cns' && 'active'}`}>
                                <span>Connected Services</span>
                            </div>
                            <div
                                onClick={() => setListItem('abt')}
                                className={`single-nav ${listItem === 'abt' && 'active'}`} >
                                <span>About</span>
                            </div>
                            <div
                                onClick={() => setListItem('sse')}
                                className={`single-nav ${listItem === 'sse' && 'active'}`}>
                                <span>System Settings Editor</span>
                            </div>
                        </nav>
                    </div>
                </aside>
                {listItem === 'aar' && <AAReports />}
                {listItem === 'cns' && <ConnectedServices />}
                {listItem === 'abt' && <About />}
                {listItem === 'sse' && <SystemEditor />}
            </div>
        </div>
    );
}

export default SystemSettingMain;