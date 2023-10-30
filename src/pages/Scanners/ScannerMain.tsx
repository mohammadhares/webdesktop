import { useSelector } from "react-redux";
import { ScannerState } from "./Scanner.Type";
import './../../style/scanner/scanner.style.css';
import ScannerSideBar from "./ScannerSideBar";
import ScannerProfile from "./ScannerProfile/ScannerProfile";
import ScannerManualScan from "./ScannerManul/ScannerManualScan";
import ScannerUpdate from "./ScannerUpdate/ScannerUpdate";

const ScannerMain = () => {
    const section = useSelector((state: ScannerState) => state.scanner.section);
    
    return ( 
        <div className="scanner_main">
            <div className="scanner_sidebar">
                <ScannerSideBar />
            </div>
            <div className="scanner_content">
                {section === 'SCANNER_PROFILE' && <ScannerProfile />}
                {section === 'SCANNER_MANUAL_SCAN' && <ScannerManualScan />}
                {section === 'SCANNER_UPDATE' && <ScannerUpdate />}
            </div>
        </div>
     );
}
 
export default ScannerMain;