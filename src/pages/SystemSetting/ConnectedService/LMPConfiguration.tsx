import { useForm } from "react-hook-form";
import { useConfigureLMPMutation } from "../../../app/api/services/ConnectedService";
import { useEffect, useState } from "react";
import ButtonLoaders from "../../../common/sharedComponent/ButtonLoaders";
import SuccessMessage from "../../../common/sharedComponent/messages/SuccessMessage";
import ErrorMessage from "../../../common/sharedComponent/messages/ErrorMessage";


const LMPConfiguration = (props: { info: any, success: boolean }) => {

    const { info, success } = props;
    const [tiMessage, setTiMessage] = useState('');
    const [tiMessageType, setTiMessageType] = useState('');
    const {
        register, handleSubmit,
        formState: { errors }, setValue
    } = useForm();

    useEffect(() => {
        if (success) {
            const cred = info;
            setValue('url', cred?.url)
            setValue('api_key', cred?.api_key)
            setValue('mesh_id', cred?.mesh_id)
        }
    }, [info, setValue, success])


    const [confLMP, { isLoading }] = useConfigureLMPMutation();
    const configureLMP = async (data: any) => {
        const formData = {
            api_key: data?.api_key,
            url: data?.url,
            mesh_id: data?.mesh_id
        }
        await confLMP(formData).unwrap()
            .catch(response => {
                setTiMessageType('error');
                setTiMessage(response?.data.error);
            })
            .then((response: any) => {
                if (response) {
                    setTiMessageType('success');
                    setTiMessage('LMP Setting Update Succesfully');
                }
            });
    }

    return (
        <>
            <div className="tirade-instance-fields">
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
                        <label htmlFor="mesh_id" className="required">Mesh ID</label>
                        <input
                            {...register('mesh_id', { required: true })}
                            className={`${errors?.mesh_id ? 'border-red' : ''}`}
                            id="mesh_id"
                            type="text"
                        />
                    </div>
                </div>
            </div>
            <button
                type="button"
                onClick={handleSubmit(configureLMP)}
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

export default LMPConfiguration;