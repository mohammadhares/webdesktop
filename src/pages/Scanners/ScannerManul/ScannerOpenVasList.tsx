import { useGetOpenVasScanListQuery } from "../../../app/api/scanner/scannerApi";
import ScannerDataList from "./ScannerDataList";

const ScannerOpenVasList = () => {

    const {
        data: openVas,
        isSuccess: openVasSuccess,
        isLoading: openVasLoading,
        isError: openVasError,
    } = useGetOpenVasScanListQuery('manual');

    return (
        <ScannerDataList
            data={openVas}
            isSuccess={openVasSuccess}
            isLoading={openVasLoading}
            isError={openVasError}
            scanner="OPENVAS"
        />
    );
}

export default ScannerOpenVasList;