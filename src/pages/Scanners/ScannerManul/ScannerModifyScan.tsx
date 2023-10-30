// NOSONAR
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNmapPauseMutation, useNmapResumeMutation, useOpenVASPauseMutation, useOpenVASResumeMutation, useZapPauseMutation, useZapResumeMutation } from "../../../app/api/scanner/scannerApi";
import { faPlay , faPause } from "@fortawesome/free-solid-svg-icons";

const ScannerModifyScan = ({ name, scanner }: { name: string, scanner: string }) => {
    const [scanStatus, setScanStatus] = useState<boolean>(false);

    // openVas
    const [resumeOpenVasScan] = useOpenVASResumeMutation();
    const [pauseOpenVasScan] = useOpenVASPauseMutation();

    // ZAP
    const [resumeZapScan] = useZapResumeMutation();
    const [pauseZapScan] = useZapPauseMutation();

    // NAMP
    const [resumeNampScan] = useNmapPauseMutation();
    const [pauseNmapScan] = useNmapResumeMutation();
    
    const handleModifyScan = async (ScanName: string) => {
        if (scanner === 'OPENVAS') {
            if (!scanStatus) await resumeOpenVasScan(ScanName);
            else await pauseOpenVasScan(ScanName);
        } else if (scanner === 'ZAP') {
            if (!scanStatus) await resumeZapScan(ScanName);
            else await pauseZapScan(ScanName);
        } else if (scanner === 'NMAP') {
            if (!scanStatus) await resumeNampScan(ScanName);
            else await pauseNmapScan(ScanName);
        }
        setScanStatus(!scanStatus);
    }

    return (
        <button
            onClick={() => handleModifyScan(name)}
            className="icon-badge play">
            <FontAwesomeIcon icon={!scanStatus ? faPlay : faPause} />
        </button>
    );
}

export default ScannerModifyScan;