import { useGetNmapScanListQuery } from "../../../app/api/scanner/scannerApi";
import ScannerDataList from "./ScannerDataList";

const ScannerNmapList = () => {

    const {
        data: nmap,
        isSuccess: nmapSuccess,
        isLoading: nmapLoading,
        isError: nmapError,
    } = useGetNmapScanListQuery('manual');

    return (
        <ScannerDataList
            data={nmap}
            isSuccess={nmapSuccess}
            isLoading={nmapLoading}
            isError={nmapError}
            scanner="NMAP"
        />
    );
}

export default ScannerNmapList;