import { useGetNmapScanStatusQuery } from "../../../app/api/scanner/scannerApi";
import ScannerProgress from "./ScannerProgress";

const ScannerNmapProgress = ({ name }: { name: string }) => {

    const {
        data: status,
        isLoading,
        isSuccess,
        isError
    } = useGetNmapScanStatusQuery(name, {
        pollingInterval: 5000,
    });

    return (
        <ScannerProgress
            data={status}
            isError={isError}
            isLoading={isLoading}
            isSuccess={isSuccess}
        />
    );
}

export default ScannerNmapProgress;