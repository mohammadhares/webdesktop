import { useDispatch, useSelector } from "react-redux";
import { ScannerState } from "./Scanner.Type";
import { updateScannerPage } from "../../features/scanner/ScannerSlice";

const ScannerSideBar = () => {
    const dispatch = useDispatch();
    const section = useSelector((state: ScannerState) => state.scanner.section);
    return (
        <>
            <aside>
                <ul>
                    <li
                        onClick={() => dispatch(updateScannerPage('SCANNER_PROFILE'))}
                        className={`${section === 'SCANNER_PROFILE' && 'active'}`}>
                        Profiles
                    </li>
                    <li
                        onClick={() => dispatch(updateScannerPage('SCANNER_MANUAL_SCAN'))}
                        className={`${section === 'SCANNER_MANUAL_SCAN' && 'active'}`}>
                        Manual Scan
                    </li>
                    <li
                        onClick={() => dispatch(updateScannerPage('SCANNER_UPDATE'))}
                        className={`${section === 'SCANNER_UPDATE' && 'active'}`}>
                        Update Scanners
                    </li>
                </ul>
            </aside>
        </>
    );
}

export default ScannerSideBar;