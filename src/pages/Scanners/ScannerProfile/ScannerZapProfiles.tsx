import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye , faChartLine , faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useGetZapScanListQuery } from "../../../app/api/scanner/scannerApi";
import Loader from "../../../common/sharedComponent/Loader";
import moment from "moment";
import { updateGraphaUrl, updateMode, updateProfile, updateProfileSection, updateWholeTarget } from "../../../features/scanner/ScannerSlice";
import { useDispatch } from "react-redux";
import { GRAFANA_URL } from "../../../app/config/constant";

const ScannerZapProfiles = () => {
    const dispatch = useDispatch();

    const {
        data: zap,
        isSuccess: zapSuccess,
        isLoading: zapLoading,
        isError: zapError,
    } = useGetZapScanListQuery('profile');


    const customizeProfile = (item: any, mode: string) => {
        dispatch(updateProfile(item));
        dispatch(updateMode(mode));
        dispatch(updateProfileSection(item?.section?.length > 0 ? item?.section[0].name : ''));
        dispatch(updateWholeTarget({
            data: item?.section
        }));
    }

    const OpenVasGraphana = () => {
        dispatch(updateGraphaUrl(
            `${GRAFANA_URL}/d/f6b99262-ff35-4d7b-9f15-38710330e269/owasp-zap?orgId=1&from=1697014837068&to=1697036437068`
        ));
        dispatch(updateMode('GRAPHANA'));
    }

    return (
        <>
            <div className="scanner_table table_mode w-100" >
                <header className="scanner_header">
                    <h3>ZAP</h3>
                    <div className="algin-right">
                        <button
                            onClick={() => OpenVasGraphana()}
                            className="icon-badge pdf">
                            <FontAwesomeIcon icon={faChartLine} />
                        </button>
                    </div>
                </header>
                <table >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Scheduled</th>
                            <th>Section</th>
                            <th>Last Run</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {zapLoading && (<tr> <td colSpan={6}> <Loader addClass="small" /></td></tr>)}
                        {zapError && <tr> <td colSpan={6}> <small className="error-text">There is some error please check the logs</small></td></tr>}
                        {zapSuccess && zap?.length === 0 && <tr> <td colSpan={6}> <small>There is not any Zap scan list</small></td></tr>}
                        {zapSuccess && zap?.map((item: any, index: number) => (
                            <tr key={index} >
                                <td>{item?.name}</td>
                                <td>{item?.description}</td>
                                <td>{item?.schedule} hours</td>
                                <td>{item?.section?.length > 0 && item?.section[0].name}</td>
                                <td>{moment(item?.last_scan).format('mm/dd/yyyy')}</td>
                                <td className="text-center icon_list">
                                    <button
                                        onClick={() => customizeProfile(item, 'EDIT')}
                                        className="icon-badge ppt">
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button
                                        onClick={() => customizeProfile(item, 'DELETE')}
                                        className="icon-badge">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ScannerZapProfiles;