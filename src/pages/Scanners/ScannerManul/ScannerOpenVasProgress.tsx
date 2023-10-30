import { useGetOpenVasScanStatusQuery } from "../../../app/api/scanner/scannerApi";
import ScannerProgress from "./ScannerProgress";

const ScannerOpenVasProgress = ({ name }: { name: string }) => {

    const {
        data: status,
        isLoading,
        isSuccess,
        isError
    } = useGetOpenVasScanStatusQuery(name, {
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

export default ScannerOpenVasProgress;