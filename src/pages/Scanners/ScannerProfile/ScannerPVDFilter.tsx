import { useEffect, useState } from "react";
import UserService from "../../../app/services/UserService";
import { useDispatch, useSelector } from "react-redux";
import { convertPVDToTarget, selectAllTarget, updateTarget } from "../../../features/scanner/ScannerSlice";
import Loader from "../../../common/sharedComponent/Loader";
import { DECKPUNCH } from "../../../app/config/constant";

const ScannerPVDFilter = ({ editable }: { editable: boolean }) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const targetList = useSelector((state: any) => state.scanner.targets);

    useEffect( () => {
        fetch(`${DECKPUNCH}/pvdsvc/vm/listall`, {
            headers: {
                Authorization: `Bearer ${UserService.getToken()}`
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((responseData) => {
                dispatch(convertPVDToTarget({
                    data: responseData,
                }));
                setLoading(false);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
                setLoading(false);
            });
    }, [dispatch]);

    const handleSelectTarget = (value: boolean, index: number) => {
        dispatch(updateTarget({
            value: value,
            index: index
        }));
    }

    return (
        <div className="scanner_table table_mode sub_list " >
            <table >
                <thead>
                    <tr>
                        <th>
                            <div className="checkbox-row">
                                <input
                                    disabled={!editable}
                                    onChange={(e) => dispatch(selectAllTarget(e.target.checked))}
                                    id="check-all"
                                    type="checkbox" />
                                <label
                                    className="aar-checkbox-dp"
                                    htmlFor="check-all" />
                            </div>
                        </th>
                        <th>Targets</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (<tr> <td colSpan={5}> <Loader /></td></tr>) : (
                        <>
                            {targetList?.filter((item: any) => item.target !== undefined)?.map((item: any, index: number) => (
                                <tr key={index} >
                                    <th>
                                        <div className="checkbox-row">
                                            <input
                                                disabled={!editable}
                                                value={item?.selected}
                                                checked={item?.selected}
                                                onChange={(e) => handleSelectTarget(e.target.checked, index)}
                                                id={`check-${index}`}
                                                type="checkbox" />
                                            <label
                                                className="aar-checkbox-dp"
                                                htmlFor={`check-${index}`} />
                                        </div>
                                    </th>
                                    <td>{item?.target}</td>
                                </tr>
                            ))}
                        </>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ScannerPVDFilter;