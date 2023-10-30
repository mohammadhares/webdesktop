import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye , faChartLine , faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useGetOpenVasScanListQuery } from "../../../app/api/scanner/scannerApi";
import Loader from "../../../common/sharedComponent/Loader";
import moment from "moment";
import { useDispatch } from "react-redux";
import { updateGraphaUrl, updateMode, updateProfile, updateProfileSection, updateWholeTarget } from "../../../features/scanner/ScannerSlice";
import { GRAFANA_URL } from "../../../app/config/constant";

const ScannerOpenVasProfiles = () => {

    const dispatch = useDispatch();

    const {
        data: openVas,
        isSuccess: openVasSuccess,
        isLoading: openVasLoading,
        isError: openVasError,
    } = useGetOpenVasScanListQuery('profile');

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
            `${GRAFANA_URL}/d/e8e0a01b-36f9-4c3a-ab22-483a683043bc/openvass?orgId=1&from=1697014860391&to=1697036460391`
        ));
        dispatch(updateMode('GRAPHANA'));
    }

    return (
        <>
            <div className="scanner_table table_mode w-100" >
                <header className="scanner_header">
                    <h3>OpenVass</h3>
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
                        {openVasLoading && (<tr> <td colSpan={6}> <Loader addClass="small" /></td></tr>)}
                        {openVasError && <tr> <td colSpan={6}> <small className="error-text">There is some error please check the logs</small></td></tr>}
                        {openVasSuccess && openVas?.length === 0 && <tr> <td colSpan={6}> <small>There is not any OpenVass scan list</small></td></tr>}
                        {openVasSuccess && openVas?.map((item: any, index: number) => (
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

export default ScannerOpenVasProfiles;