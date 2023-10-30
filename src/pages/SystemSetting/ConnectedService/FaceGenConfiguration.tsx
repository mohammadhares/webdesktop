import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import ButtonLoaders from "../../../common/sharedComponent/ButtonLoaders";
import SuccessMessage from "../../../common/sharedComponent/messages/SuccessMessage";
import ErrorMessage from "../../../common/sharedComponent/messages/ErrorMessage";
import { useConfigureFaceGenMutation } from "../../../app/api/services/ConnectedService";


const FaceGenConfiguration = (props: { info: any, success: boolean }) => {

    const { info, success } = props;
    const [tiMessage, setTiMessage] = useState('');
    const [tiMessageType, setTiMessageType] = useState('');
    const {
        register, handleSubmit,
        formState: { errors }, setValue
    } = useForm();

    useEffect(() => {
        if (success && info?.data?.length > 0) {
            const cred = info?.data[0];
            setValue('url', cred?.url)
            setValue('api_key', cred?.api_key)
        }
    }, [info?.data, setValue, success])

    const [confFaceGen, { isLoading }] = useConfigureFaceGenMutation();
    const configureFaceGen = async (data: any) => {
        const formData = {
            api_key: data?.api_key,
            url: data?.url,
        }
        await confFaceGen(formData).unwrap()
            .catch((response: any) => {
                setTiMessageType('error');
                setTiMessage(response?.data.error);
            })
            .then((response: any) => {
                if (response) {
                    setTiMessageType('success');
                    setTiMessage('FaceGen Setting Update Succesfully');
                }
            });
    }

    return (
        <>
            <div className="tirade-instance-fields">
                <h3>Version: 1.0</h3>
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
            </div>
            <button
                type="button"
                onClick={handleSubmit(configureFaceGen)}
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

export default FaceGenConfiguration;