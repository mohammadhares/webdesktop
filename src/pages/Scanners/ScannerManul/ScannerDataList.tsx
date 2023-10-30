import moment from "moment";
import Loader from "../../../common/sharedComponent/Loader";
import ScannerOpenVasProgress from "./ScannerOpenVasProgress";
import { useRemoveNmapScanMutation, useRemoveOpenVasScanMutation, useRemoveZapScanMutation } from "../../../app/api/scanner/scannerApi";
import { useDispatch } from "react-redux";
import { updateManualMode, updateReportHost, updateReportType } from "../../../features/scanner/ScannerSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import ScannerConfirmDestory from "../ScannerConfirmDestory";
import ScannerModifyScan from "./ScannerModifyScan";
import ScannerZapProgress from "./ScannerZapProgress";
import ScannerNmapProgress from "./ScannerNmapProgress";

type ScannerDataListProps = {
    data: any,
    isSuccess: boolean,
    isLoading: boolean,
    isError: boolean,
    scanner: string
}
const ScannerDataList = ({ data, isSuccess, isLoading, isError, scanner }: ScannerDataListProps) => {

    const dispatch = useDispatch();
    const handleReport = async (name : string ) => {
        dispatch(updateReportHost(name));
        dispatch(updateManualMode('REPORT'));
        dispatch(updateReportType(scanner));
    }

    const [removeOpenVasScan] = useRemoveOpenVasScanMutation();
    const [removeZapScan] = useRemoveZapScanMutation();
    const [removeNmapScan] = useRemoveNmapScanMutation();
    const handleRemoveScan = async (name: string) => {
        if (scanner === 'OPENVAS') {
            await removeOpenVasScan(name);
        } else if (scanner === 'ZAP') {
            await removeZapScan(name);
        } else if (scanner === 'NMAP') {
            await removeNmapScan(name);
        }
    }

    return (
        <div className="scanner_table table_mode ">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Target</th>
                        <th>Status</th>
                        <th>Last Run</th>
                        <th className="text-center">Report</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading && (<tr> <td colSpan={6}> <Loader /></td></tr>)}
                    {isError && <tr> <td colSpan={6}> <p>There is some error please check the logs</p></td></tr>}
                    {isSuccess && data?.length === 0 && <tr> <td colSpan={6}> <small>There is not any OpenVass scan</small></td></tr>}
                    {isSuccess && data?.map((item: any, index: number) => (
                        <tr key={index}>
                            <td>{item?.name}</td>
                            <td>{item?.target}</td>
                            <td style={{ width: "320px" }}>
                                {scanner === 'OPENVAS' && <ScannerOpenVasProgress name={item?.name} /> }
                                {scanner === 'ZAP' && <ScannerZapProgress name={item?.name} /> }
                                {scanner === 'NMAP' && <ScannerNmapProgress name={item?.name} /> }
                            </td>
                            <td>{moment(item?.last_run).format('MM/DD/YYYY')}</td>
                            <td className="text-center icon_list">
                                <button
                                    onClick={() => handleReport(item?.name)}
                                    className="icon-badge pdf">
                                    <FontAwesomeIcon icon={faBookOpen} />
                                </button>
                            </td>
                            <td className="icon_list">
                                <ScannerModifyScan
                                    name={item?.name}
                                    scanner={scanner}
                                />
                                <ScannerConfirmDestory
                                    message="Are you sure to remove scan"
                                    onConfirm={() => handleRemoveScan(item?.name)}
                                />
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ScannerDataList;