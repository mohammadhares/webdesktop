import { useSelector } from "react-redux";
import ScannerOpenVasReport from "./ScannerOpenVasReport";
import ScannerZapReport from "./ScannerZapReport";
import ScannerNmapReport from "./ScannerNmapReport";

const ScannerReport = () => {

    const report_type = useSelector((state: any) => state.scanner.report_type);

    return (
        <>
            {report_type === 'OPENVAS' && <ScannerOpenVasReport />}
            {report_type === 'ZAP' && <ScannerZapReport />}
            {report_type === 'NMAP' && <ScannerNmapReport />}
        </>
    );
}

export default ScannerReport;