import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus , faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ScannerCreateProfile from "./ScannerCreateProfile";
import ScannerProfileList from "./ScannerProfileList";
import { useDispatch, useSelector } from "react-redux";
import ScannerDeleteProfile from "./ScannerDeleteProfile";
import { updateMode } from "../../../features/scanner/ScannerSlice";
import ScannerGraphana from "../ScannerGraphana";

const ScannerProfile = () => {
    const dispatch = useDispatch();
    const [scannerForm, setScannerForm] = useState('LIST');
    const actions = useSelector((state: any) => state.scanner.mode);

    const handleBack = () => {
        dispatch(updateMode('SHOW'));
        setScannerForm('LIST');
    }

    return (
        <div className="profile p-5">
            {actions === 'SHOW' && scannerForm === 'LIST' && (
                <h3 className="text-left">
                    Profiles
                    <div className="add-btn profile_add_btn">
                        <button
                            onClick={() => setScannerForm('FORM')}
                            className='mc-btn'>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </h3>
            )} 
            { (scannerForm === 'FORM' || actions === 'EDIT' || actions === 'DELETE' ||  actions === 'GRAPHANA' ) && (
                <h3 
                    className="text-left" 
                    style={{ marginTop: "-30px"}}>
                     <button 
                        onClick={handleBack}
                        className='action-link'>
                        <FontAwesomeIcon 
                            icon={faAngleLeft} />
                            &nbsp; Back
                    </button>
                </h3>
            )}
            {scannerForm === 'LIST' && (
                <>
                    {actions === 'SHOW' && <ScannerProfileList onBack={handleBack} />}
                    {actions === 'EDIT' && <ScannerDeleteProfile mode="VIEW" />}
                    {actions === 'DELETE' && <ScannerDeleteProfile mode="DELETE" />}
                    {actions === 'GRAPHANA' && <ScannerGraphana />}
                </>
            )}

            {scannerForm === 'FORM' && (
                <ScannerCreateProfile onBack={handleBack} />
            )}
        </div>
    );
}

export default ScannerProfile;