import { useSelector } from "react-redux";
import { useGetOpenVasReportQuery } from "../../../app/api/scanner/scannerApi";
import ScannerReportList from "./ScannerReportList";

const ScannerOpenVasReport = () => {

    const report_host = useSelector((state: any) => state.scanner.report_host);

    const {
        data: report,
        isLoading,
        isSuccess,
    } = useGetOpenVasReportQuery(report_host);

    return (
        <ScannerReportList
            report={report}
            loading={isLoading}
            success={isSuccess}
        />
    )
}
 
export default ScannerOpenVasReport;