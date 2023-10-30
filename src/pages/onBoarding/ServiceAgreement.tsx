import { useNavigate } from "react-router-dom";
import { useGetSysteSettingsQuery } from "../../app/api/ascalon.api";
import UserService from "../../app/services/UserService";
import Loader from "../../common/sharedComponent/Loader";

const ServiceAgreement = () => {
    const {
        data,
        isSuccess,
        isLoading,
        isError,
    } = useGetSysteSettingsQuery('AGREEMENT_TEXT');

    let content;
    if (isLoading) {
        content = <div> <Loader addClass="large" /></div>
    } else if (isSuccess) {
        content = renderAgreementData(data?.AGREEMENT_TEXT);
    } else if (isError) {
        <div>There is no service agreement data</div>
    }

    const redirect = useNavigate();
    const handleRedirect = () => {
        redirect('/home')
    }

    return (
        <main className="ServiceAgreement">
            <h1>Service Agreement</h1>
            <div className="ServiceAgreementContent">
                {content}
            </div>
            <div className="ServiceAgreementButtons">
                <button 
                    onClick={() => UserService.doLogout()}
                    className="mc-btn btn-red" type="button">
                    Reject
                </button>
                <button 
                    onClick={() => handleRedirect()}
                    className="mc-btn btn-green" type="button" >
                    Accept
                </button>
            </div>
        </main>
    );
}


const renderAgreementData = (item: any) => {
    if (item) {
        return (
            <div className="contents">
                <h1>{item?.header}</h1>
                <h2>{item?.subheader}</h2>
                <p>{item?.consent}</p>
                <ul>
                    {item?.conditions?.map((condition: string[], index: number) => (
                        <li key={index}>{condition}</li>
                    ))}
                </ul>
                <hr />
                <h1>{item?.privacy_act}</h1>
                <h2>{item?.privacy_act_sub}</h2>
                <h3>{item?.must}</h3>
                <ul>
                    {item?.privacy_act_data?.map((privacy: string[], index: number) => (
                        <li key={index}>{privacy}</li>
                    ))}
                </ul>
                <hr />
                <h1>{item?.terms_conditions}</h1>
                <p>{item?.term_condation_sub}</p>
            </div>
        )
    }
}

export default ServiceAgreement;