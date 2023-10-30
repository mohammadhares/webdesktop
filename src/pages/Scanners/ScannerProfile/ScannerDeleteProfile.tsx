import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRemoveOpenVasScanMutation } from "../../../app/api/scanner/scannerApi";
import ButtonLoaders from "../../../common/sharedComponent/ButtonLoaders";
import SuccessMessage from "../../../common/sharedComponent/messages/SuccessMessage";
import ErrorMessage from "../../../common/sharedComponent/messages/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { updateMode } from "../../../features/scanner/ScannerSlice";
import ScannerFilters from "./ScannerFilters";

const ScannerDeleteProfile = ({ mode }: { mode: string }) => {

    const dispatch = useDispatch();
    const [sucessMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const profile = useSelector((state: any) => state.scanner.profile);

    const {
        register,
        formState: { errors },
        setValue,
    } = useForm();

    useEffect(() => {
        setValue('name', profile?.name);
        setValue('description', profile?.description);
        setValue('scanner', profile?.scanner);
        setValue('schedule', profile?.schedule);
    }, [
        setValue,
        profile?.name,
        profile?.description,
        profile?.scanner,
        profile?.schedule,
    ]);

    const [removeScan, { isLoading }] = useRemoveOpenVasScanMutation();
    const handleRemove = async () => {
        await removeScan(profile?.name)
            .unwrap().then((response) => {
                if (response) {
                    setSuccessMessage('Scan Removed Successfully');
                    dispatch(updateMode('SHOW'));
                } else {
                    setErrorMessage('Scan Delete failed.');
                }
            });
    }


    return (
        <div className="scanner_form">
            <div className="row mt-4">
                <div className="col-lg-4 p-3">
                    <ScannerFilters editable={false} />
                </div>
                <div className="col-lg-8 p-3"
                    style={{ borderLeft: '1px solid #fff5', height: '600px' }}>
                    <div className="row" >
                        <div className="col-lg-4">
                            <label htmlFor="name">Profile Name</label>
                            <input
                                type="text"
                                readOnly
                                name="name"
                                id="name"
                                {...register("name", { required: true })}
                                className={`asc_form_element mt-1 ${errors?.name ? 'border-red' : ''}`}
                                placeholder="Enter Profile Name"
                                style={{ width: '100%' }} />
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="scanner">Scanner</label>
                            <select
                                disabled
                                {...register("scanner", { required: true })}
                                className={`asc_form_element mt-1 ${errors?.scanner ? 'border-red' : ''}`}
                                name="scanner" id="scanner">
                                <option value="">Select a Scanner </option>
                                <option value="openvas">OpenVAS </option>
                                <option value="zap">ZAP</option>
                            </select>
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="schedule">Schedule ( hour )</label>
                            <input
                                type="text"
                                name="schedule"
                                readOnly
                                id="schedule"
                                {...register("schedule", { required: true })}
                                className={`asc_form_element mt-1 ${errors?.schedule ? 'border-red' : ''}`}
                                placeholder="Schedule (hour)"
                                style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className="row mt-4" >
                        <div className="col-lg-12">
                            <label htmlFor="schedule">Descripton</label>
                            <textarea
                                readOnly
                                {...register("description")}
                                style={{ margin: 'auto' }}
                                name="description"
                                id="description"
                                className="asc_form_element mt-1"
                                rows={100}
                            />
                        </div>
                    </div>
                    {mode === 'DELETE' && (
                        <div className="text-right mt-4">
                            <button
                                onClick={() => handleRemove()}
                                className="mc-btn btn-red"
                                style={{ marginLeft: '10px' }}>
                                <ButtonLoaders
                                    text="Delete"
                                    loading={isLoading}
                                />
                            </button>
                        </div>
                    )}
                    <SuccessMessage message={sucessMessage} />
                    <ErrorMessage message={errorMessage} />
                </div>
            </div>

        </div>
    );
}

export default ScannerDeleteProfile;