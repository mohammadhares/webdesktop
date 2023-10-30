import { useGetZapScanStatusQuery } from "../../../app/api/scanner/scannerApi";
import ScannerProgress from "./ScannerProgress";

const ScannerZapProgress = ({ name }: { name: string }) => {

    const {
        data: status,
        isLoading,
        isSuccess,
        isError
    } = useGetZapScanStatusQuery(name, {
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

export default ScannerZapProgress;