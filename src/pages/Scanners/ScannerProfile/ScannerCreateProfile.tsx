import { useState } from "react";
import { useForm } from "react-hook-form";
import { useOpenVASscanMutation, useZapScanMutation } from "../../../app/api/scanner/scannerApi";
import ButtonLoaders from "../../../common/sharedComponent/ButtonLoaders";
import SuccessMessage from "../../../common/sharedComponent/messages/SuccessMessage";
import ErrorMessage from "../../../common/sharedComponent/messages/ErrorMessage";
import ScannerFilters from "./ScannerFilters";
import { useSelector } from "react-redux";

const ScannerCreateProfile = ({ onBack }: { onBack : () => void}) => {

    const targetList = useSelector((state: any) => state.scanner.targets);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [sucessMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [openVasScan, { isLoading: OVLoading }] = useOpenVASscanMutation();
    const [zapScan, { isLoading: ZPLoading }] = useZapScanMutation();
    const createProfile = async (data: any) => {
        const newTargets = targetList.filter((item : any) => item.selected === true)?.map(({ selected, ...rest }: any) => rest);

        const payload = {
            name: data?.name,
            description: data?.description,
            target: "",
            schedule: +data?.schedule,
            type: "profile",
            section: newTargets,
        }

        if (data?.scanner === 'OpenVAS') {
            await openVasScan(payload).unwrap().then((response) => {
                if (response) {
                    setSuccessMessage('Scan started successfully');
                    setTimeout(() => {
                        onBack();
                    }, 2000);
                } else if (!response) {
                    setErrorMessage('Scan failed.');
                }
            });
        } else if (data?.scanner === 'ZAP') {
            await zapScan(payload).unwrap().then((response) => {
                if (response) {
                    setSuccessMessage('Scan started successfully');
                    setTimeout(() => {
                        onBack();
                    }, 2000);
                } else {
                    setErrorMessage('Scan failed.');
                }
            });
        }

        setTimeout(() => {
            setSuccessMessage('');
            setErrorMessage('');
        }, 3000);
    }


    const displayError = ( value : any ) => {
        if( value ) return 'border-red';
    }

    return (
        <div className="scanner_form">
            <div className="row mt-4">
                <div className="col-lg-4 p-3">
                    <ScannerFilters editable={true} />
                </div>
                <div className="col-lg-8 p-3"
                    style={{ borderLeft: '1px solid #fff5', height: '600px' }}>
                    <div className="row" >
                        <div className="col-lg-4">
                            <label htmlFor="name">Profile Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                {...register("name", { required: true })}
                                className={`asc_form_element mt-1 ${displayError(errors?.name)}`}
                                placeholder="Enter Profile Name"
                                style={{ width: '100%' }} />
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="scanner">Scanner</label>
                            <select
                                {...register("scanner", { required: true })}
                                className={`asc_form_element mt-1 ${displayError(errors?.scanner)}`}
                                name="scanner" id="scanner">
                                <option value="">Select a Scanner </option>
                                <option value="OpenVAS">OpenVAS </option>
                                <option value="ZAP">ZAP</option>
                                <option value="NAMP">NAMP</option>
                            </select>
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="schedule">Schedule ( hour )</label>
                            <input
                                type="number"
                                name="schedule"
                                id="schedule"
                                {...register("schedule", { required: true })}
                                className={`asc_form_element mt-1 ${displayError(errors?.schedule)}`}
                                placeholder="Schedule (hour)"
                                style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className="row mt-4" >
                        <div className="col-lg-12">
                            <label htmlFor="schedule">Descripton</label>
                            <textarea
                                {...register("description")}
                                style={{ margin: 'auto' }}
                                name="description"
                                id="description"
                                className="asc_form_element mt-1"
                                rows={100}
                            />
                        </div>
                    </div>
                    <div className="text-right mt-4">
                        <button 
                            onClick={() => onBack()}
                            className="action-link">
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit(createProfile)}
                            className="mc-btn btn-blue"
                            style={{ marginLeft: '10px' }}>
                            <ButtonLoaders
                                text="Submit"
                                loading={OVLoading || ZPLoading}
                            />
                        </button>
                    </div>
                    <SuccessMessage message={sucessMessage} />
                    <ErrorMessage message={errorMessage} />
                </div>
            </div>

        </div>
    );
}

export default ScannerCreateProfile;