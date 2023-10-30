import { useState } from "react";
import { ScannerList } from "../ScannerManul/ScannerList";
import ScannerOpenVasProfiles from "./ScannerOpenVasProfiles";
import ScannerZapProfiles from "./ScannerZapProfiles";
import ScannerNmapProfile from "./ScannerNmapProfile";

const ScannerProfileList = ({ onBack }: { onBack : () => void}) => {
    const [scannerType, setScannerType] = useState('OpenVAS');

    return (
        <div >
            <div className="scanners_lists">
                <ScannerList
                    value={scannerType}
                    onChange={setScannerType} />
            </div>
            <div className="scaneer_dto">
                {scannerType === 'OpenVAS' && <ScannerOpenVasProfiles />}
                {scannerType === 'ZAP' && <ScannerZapProfiles />}
                {scannerType === 'NMAP' && <ScannerNmapProfile />}
            </div>
        </div>
    );
}

export default ScannerProfileList;