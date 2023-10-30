import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus , faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTarget, removeTarget, resetTargets, updateProfileSection } from "../../../features/scanner/ScannerSlice";
import { Targets } from "../Scanner.Type";
import ScannerNodeFilters from "./ScannerNodeFilters";
import ScannerPVDFilter from "./ScannerPVDFilter";

const ScannerFilters = ({ editable }: { editable: boolean }) => {

    const dispatch = useDispatch();
    const targetList = useSelector((state: any) => state.scanner.targets);
    const profile_section = useSelector((state: any) => state.scanner.profile_section);

    const {
        register,
        handleSubmit, setValue,
        formState: { errors }
    } = useForm();


    const handleAddTarget = (data: { target: string }) => {
        dispatch(addTarget({
            name: profile_section,
            target: data?.target
        }));
    }

    const handleRemoveTarget = (id: number) => {
        dispatch(removeTarget({
            id: id,
        }))
    }

    const handleChangeSection = (value: string) => {
        setValue('target', "");
        dispatch(updateProfileSection(value));
        dispatch(resetTargets());
    }

    return (
        <section>
            <div>
                <label htmlFor="section">Section</label>
                <select
                    disabled={!editable}
                    value={profile_section}
                    onChange={(e) => handleChangeSection(e.target.value)}
                    className="asc_form_element mt-1"
                    name="section"
                    id="section">
                    <option value="" hidden>Select a Section </option>
                    <option value="PVD">PVD </option>
                    <option value="FIREWALLS">Firewalls</option>
                    <option value="SIM_GATEWAYS">SIM Gateways</option>
                    <option value="EXIT_NODES">Exit Nodes</option>
                    <option value="MESH_NODES">Mesh Nodes</option>
                </select>
            </div>
            <div className="mt-4">
                {(profile_section === 'FIREWALLS' || profile_section === 'SIM_GATEWAYS') && (
                    <div className="target_list">
                        <label htmlFor="target">Targets</label>
                        <div className="flex mt-1">
                            <input
                                disabled={!editable}
                                id="target"
                                type="text"
                                name="target"
                                className={`asc_form_element ${errors?.target ? 'border-red' : ''}`}
                                placeholder="Enter Target"
                                {...register("target", { required: true })}
                            />
                            <button
                                disabled={!editable}
                                type="submit"
                                onClick={handleSubmit(handleAddTarget)}
                                className="mc-btn btn-target-add">
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                        <div className="target_table">
                            <table>
                                <thead />
                                <tbody>
                                    {targetList?.map((item: Targets, index: number) => (
                                        <tr key={index}>
                                            <td>{item?.target}</td>
                                            <td>
                                                {editable && (
                                                    <button
                                                        onClick={() => handleRemoveTarget(index)}
                                                        className="icon-badge">
                                                        <FontAwesomeIcon
                                                            style={{ fontSize: '12px' }}
                                                            icon={faTrashAlt} />
                                                    </button>
                                                )}

                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {(profile_section === 'EXIT_NODES' || profile_section === 'MESH_NODES') && (
                    <ScannerNodeFilters
                        editable={editable}/>
                )}

                {profile_section === 'PVD' && (
                    <ScannerPVDFilter
                        editable={editable} />
                )}
            </div>
        </section>
    );
}

export default ScannerFilters;