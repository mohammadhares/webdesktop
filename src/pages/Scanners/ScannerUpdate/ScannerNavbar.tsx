import { ScannerNavbarProps } from "../Scanner.Type";

const ScannerNavbar = ({ scannerType, setScannerType }: ScannerNavbarProps) => {
    return (
        <nav className="horizontal_nav">
            <ul>
                <li
                    onClick={() => setScannerType('OPENVASS')}
                    className={`${scannerType === 'OPENVASS' && 'active'}`}>
                    OpenVASS
                </li>
                <li
                    onClick={() => setScannerType('ZAP')}
                    className={`${scannerType === 'ZAP' && 'active'}`}>
                    ZAP
                </li>
                <li
                    onClick={() => setScannerType('NMAP')}
                    className={`${scannerType === 'NMAP' && 'active'}`}>
                    NMAP
                </li>
                <li
                    onClick={() => setScannerType('CLAMAV')}
                    className={`${scannerType === 'CLAMAV' && 'active'}`}>
                    ClamAV
                </li>
            </ul>
        </nav>
    );
}

export default ScannerNavbar;