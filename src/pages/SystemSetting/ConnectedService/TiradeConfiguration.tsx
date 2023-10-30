import { useForm } from "react-hook-form";
import { useConfigureTiradeMutation } from "../../../app/api/services/ConnectedService";
import { useEffect, useState } from "react";
import { TiradeInfo } from "./Types";
import ButtonLoaders from "../../../common/sharedComponent/ButtonLoaders";
import SuccessMessage from "../../../common/sharedComponent/messages/SuccessMessage";
import ErrorMessage from "../../../common/sharedComponent/messages/ErrorMessage";


const TiradeConfiguration = (props: TiradeInfo) => {

    const { info, success } = props;
    const [tiMessage, setTiMessage] = useState('');
    const [tiMessageType, setTiMessageType] = useState('');
    const {
        register, handleSubmit,
        formState: { errors }, setValue
    } = useForm();

    useEffect(() => {
        if (success) {
            const cred = info?.data[0];
            setValue('url', cred?.url)
            setValue('api_key', cred?.api_key)
            setValue('api_secret', cred?.api_secret)
        }
    }, [info?.data, setValue, success])

    const [confTirade, { isLoading }] = useConfigureTiradeMutation();
    const configureTirade = async (data: any) => {
        const formData = {
            api_key: data?.api_key,
            api_secret: data?.api_secret,
            url: data?.url,
        }
        await confTirade(formData).unwrap()
            .catch(response => {
                setTiMessageType('error');
                setTiMessage(response?.data.error);
            })
            .then((response: any) => {
                if (response) {
                    setTiMessageType('success');
                    setTiMessage('Tirade Setting Update Succesfully');
                }
            });
    }

    return (
        <>
            <div className="tirade-instance-fields">
                <h3>Instance 1</h3>
                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="ti-url" className="required">URL</label>
                        <input
                            id="ti-url"
                            {...register('url', { required: true })}
                            className={`${errors?.url ? 'border-red' : ''}`}
                            type="text"
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="ti-key" className="required">API Key</label>
                        <input
                            id="ti-key"
                            {...register('api_key', { required: true })}
                            className={`${errors?.api_key ? 'border-red' : ''}`}
                            type="text"
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="ti-secret" className="required">Secret</label>
                        <input
                            {...register('api_secret', { required: true })}
                            className={`${errors?.api_secret ? 'border-red' : ''}`}
                            id="ti-secret"
                            type="text"
                        />
                    </div>
                </div>
            </div>
            <button
                type="button"
                onClick={handleSubmit(configureTirade)}
                className="mc-btn btn-blue mt-3">
                <ButtonLoaders text={"Save Changes"} loading={isLoading} />
            </button>

            {tiMessageType !== '' && (
                <div className="display-message">
                    {tiMessageType === 'success' && (
                        <SuccessMessage message={tiMessage} />
                    )}

                    {tiMessageType === 'error' && (
                        <ErrorMessage message={tiMessage} />
                    )}
                </div>
            )}

        </>
    );
}

export default TiradeConfiguration;