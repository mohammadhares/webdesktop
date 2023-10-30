import { useState } from "react";
import { useGetLMPCredentialQuery, useGetTiradeCredentialQuery } from "../../app/api/services/ConnectedService";
import TiradeConfiguration from "./ConnectedService/TiradeConfiguration";
import LMPConfiguration from "./ConnectedService/LMPConfiguration";

const ConnectedServices = () => {
    const [tiradeAD, setTiradeAD] = useState(true);
    const [lmpAD, setLMPAD] = useState(true);

    const {
        data: td_info,
        isSuccess: td_success,
    } = useGetTiradeCredentialQuery('');

    const {
        data: lm_info,
        isSuccess: lm_success,
    } = useGetLMPCredentialQuery('');


    return (
        <>
            <div className="settings-page connected-services">
                <h1>Connected Services</h1>
                <div className={`accordion ${tiradeAD ? 'open-accordion' : 'close-accordion'}`}>
                    <header onClick={() => setTiradeAD(tiradeAD ? false : true)}>
                        <i className={`fa ${tiradeAD ? 'fa-caret-up' : 'fa-caret-down   '}`}></i>
                        <h5>Tirade</h5>
                    </header>
                    <div className="accordion-body">
                        <TiradeConfiguration
                            info={td_info}
                            success={td_success}
                        />
                    </div>
                </div>


                <div className={`accordion ${lmpAD ? 'open-accordion' : 'close-accordion'}`}>
                    <header onClick={() => setLMPAD(lmpAD ? false : true)}>
                        <i className={`fa ${lmpAD ? 'fa-caret-up' : 'fa-caret-down   '}`}></i>
                        <h5>LMP</h5>
                    </header>
                    <div className="accordion-body">
                        <LMPConfiguration
                            info={lm_info}
                            success={lm_success}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ConnectedServices;