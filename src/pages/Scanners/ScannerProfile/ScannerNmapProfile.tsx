import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye , faTrashAlt , faChartLine } from "@fortawesome/free-solid-svg-icons";
import { useGetNmapScanListQuery } from "../../../app/api/scanner/scannerApi";
import Loader from "../../../common/sharedComponent/Loader";
import moment from "moment";
import { updateGraphaUrl, updateMode, updateProfile, updateProfileSection, updateWholeTarget } from "../../../features/scanner/ScannerSlice";
import { useDispatch } from "react-redux";
import { GRAFANA_URL } from "../../../app/config/constant";

const ScannerNmapProfile = () => {
    const dispatch = useDispatch();

    const {
        data: nmap,
        isSuccess: nmapSuccess,
        isLoading: nmapLoading,
        isError: nmapError,
    } = useGetNmapScanListQuery('profile');

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
            `${GRAFANA_URL}/d/f7dad121-1ed5-46f2-88fb-2362369d781b/nmap?orgId=1&from=1697014752185&to=1697036352185`
        ));
        dispatch(updateMode('GRAPHANA'));
    }

    return (
        <>
            <div className="scanner_table table_mode w-100" >
                <header className="scanner_header">
                    <h3>NMAP</h3>
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
                        {nmapLoading && (<tr> <td colSpan={6}> <Loader addClass="small" /></td></tr>)}
                        {nmapError && <tr> <td colSpan={6}> <small className="error-text">There is some error please check the logs</small></td></tr>}
                        {nmapSuccess && nmap?.length === 0 && <tr> <td colSpan={6}> <small>There is not any nmaps scan list</small></td></tr>}
                        {nmapSuccess && nmap?.map((item: any, index: number) => (
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

export default ScannerNmapProfile;