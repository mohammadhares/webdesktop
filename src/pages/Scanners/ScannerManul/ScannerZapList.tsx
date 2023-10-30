import { useGetZapScanListQuery } from "../../../app/api/scanner/scannerApi";
import ScannerDataList from "./ScannerDataList";

const ScannerZapList = () => {

    const {
        data: zap,
        isSuccess: zapSuccess,
        isLoading: zapLoading,
        isError: zapError,
    } = useGetZapScanListQuery('manual');

    return (
        <ScannerDataList
            data={zap}
            isSuccess={zapSuccess}
            isLoading={zapLoading}
            isError={zapError}
            scanner="ZAP"
        />
    );
}

export default ScannerZapList;