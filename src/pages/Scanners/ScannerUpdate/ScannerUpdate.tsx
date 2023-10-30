import { useState } from "react";
import ScannerNavbar from "./ScannerNavbar";
import ScannerUpdateTable from "./ScannerUpdateTable";
import { useGetScannerUpdatesQuery } from "../../../app/api/scanner/scannerApi";

const ScannerUpdate = () => {
    const [scannerType, setScannerType] = useState<string>('OPENVASS');

    const {
        data,
        isError,
        isSuccess,
        isLoading, 
    } = useGetScannerUpdatesQuery(scannerType.toLowerCase());
    
    return (
        <div className="scanner_update">
            <ScannerNavbar
                scannerType={scannerType}
                setScannerType={setScannerType} />
            <ScannerUpdateTable
                data={data}
                isError={isError}
                isSuccess={isSuccess}
                isLoading={isLoading}
                scannerType={scannerType}
            />
        </div>
    );
}

export default ScannerUpdate;