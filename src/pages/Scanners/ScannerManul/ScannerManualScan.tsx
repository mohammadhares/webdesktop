
import { useState } from "react";
import { ScannerList } from "./ScannerList";
import { useOpenVASscanMutation, useZapScanMutation } from "../../../app/api/scanner/scannerApi";
import ButtonLoaders from "../../../common/sharedComponent/ButtonLoaders";
import ScannerOpenVasList from "./ScannerOpenVasList";
import ScannerZapList from "./ScannerZapList";
import SuccessMessage from "../../../common/sharedComponent/messages/SuccessMessage";
import ErrorMessage from "../../../common/sharedComponent/messages/ErrorMessage";
import { useSelector } from "react-redux";
import ScannerReport from "./ScannerReport";
import ScannerNmapList from "./ScannerNmapList";

const ScannerManualScan = () => {

    const manual_mode = useSelector((state: any) => state.scanner.manual_mode);
    const [name, setName] = useState('');
    const [target, setTarget] = useState('');
    const [scannerType, setScannerType] = useState('OpenVAS');
    const [sucessMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [openVasScan, { isLoading: OVLoading }] = useOpenVASscanMutation();
    const [zapScan, { isLoading: ZPLoading }] = useZapScanMutation();
    const handleManualScan = async () => {
        const payload = {
            name: name,
            description: "",
            target: target,
            schedule: 0,
            type: "manual",
            section: {}
        }
        if (scannerType === 'OpenVAS') {
            await openVasScan(payload).unwrap().then((response) => {
                if (response) {
                    setSuccessMessage('Scan started successfully');
                } else if (!response) {
                    setErrorMessage('Scan failed.');
                }
            }).catch((error) => {
                setErrorMessage(error?.data?.error_message);
            });
        } else if (scannerType === 'ZAP') {
            await zapScan(payload).unwrap().then((response) => {
                if (response) {
                    setSuccessMessage('Scan started successfully');
                } else {
                    setErrorMessage('Scan failed.');
                }
            }).catch((error) => {
                setErrorMessage(error?.data?.error_message);
            });
        } else {
            return false;
        }

        setTimeout(() => {
            setName('');
            setTarget('');
            setSuccessMessage('');
            setErrorMessage('');
        }, 3000);
    }

    return (
        <div className="manual_scan p-5 mt-5">
            {manual_mode === 'LIST' && (

                <div className="scanner_form">
                    <div className="scanner_form_field flex">
                        <ScannerList
                            value={scannerType}
                            onChange={setScannerType} />
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Task Name"
                        />
                        <input
                            value={target}
                            onChange={(e) => setTarget(e.target.value)}
                            type="text"
                            name="target"
                            id="target"
                            placeholder="Target IP or URL"
                        />
                        <button
                            onClick={() => handleManualScan()}
                            disabled={!(target || name)}
                            className="mc-btn scan_btn">
                            <ButtonLoaders
                                text="Scan"
                                loading={OVLoading || ZPLoading} />
                        </button>
                    </div>
                    <div className="scan_message_section">
                        <SuccessMessage message={sucessMessage} />
                        <ErrorMessage message={errorMessage} />
                    </div>
                </div>
            )}
            {manual_mode === 'REPORT' && <ScannerReport />}
            {manual_mode === 'LIST' && scannerType === 'OpenVAS' && <ScannerOpenVasList />}
            {manual_mode === 'LIST' && scannerType === 'ZAP' && <ScannerZapList />}
            {manual_mode === 'LIST' && scannerType === 'NMAP' && <ScannerNmapList />}
        </div>
    );
}

export default ScannerManualScan;