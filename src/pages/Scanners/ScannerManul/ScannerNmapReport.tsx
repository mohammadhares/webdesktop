import { useSelector } from "react-redux";
import { useGetNmapReportQuery } from "../../../app/api/scanner/scannerApi";
import ScannerReportList from "./ScannerReportList";

const ScannerNmapReport = () => {

    const report_host = useSelector((state: any) => state.scanner.report_host);

    const {
        data: report,
        isLoading,
        isSuccess,
    } = useGetNmapReportQuery(report_host);


    return (
        <ScannerReportList
            report={report}
            loading={isLoading}
            success={isSuccess}
        />
    )
}
 
export default ScannerNmapReport;