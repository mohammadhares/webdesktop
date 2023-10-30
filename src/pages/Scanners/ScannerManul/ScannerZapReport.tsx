import { useSelector } from "react-redux";
import { useGetZapReportQuery } from "../../../app/api/scanner/scannerApi";
import ScannerReportList from "./ScannerReportList";

const ScannerZapReport = () => {

    const report_host = useSelector((state: any) => state.scanner.report_host);

    const {
        data: report,
        isLoading,
        isSuccess,
    } = useGetZapReportQuery(report_host);

    return (
        <ScannerReportList
        report={report}
        loading={isLoading}
        success={isSuccess}
    />
    )
}
 
export default ScannerZapReport;