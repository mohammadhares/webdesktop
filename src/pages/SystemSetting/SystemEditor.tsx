import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/ext-language_tools";
import { useEffect, useState } from "react";
import AddSystemSetting from "./AddSystemSetting";
import { useAddSettingMutation, useGetSettingContentQuery, useGetSettingsQuery } from "../../app/api/services/ConnectedService";
import ButtonLoaders from "../../common/sharedComponent/ButtonLoaders";

const SystemEditor = () => {

    const [conf, setConf] = useState("");
    const [value, setValue] = useState('{}');
    const [params, setParams] = useState<any>([]);

    const {
        data: setting_params,
        isSuccess,
    } = useGetSettingContentQuery(conf);

    const {
        data: settings,
        isSuccess: params_success,
    } = useGetSettingsQuery();


    useEffect(() => {
        if (isSuccess) {
            const setting: any = setting_params;
            setValue(JSON.stringify(setting[conf]));
        }

        if (params_success) {
            setParams(settings);
        }
    }, [conf, isSuccess, params_success, setting_params, settings])


    const onEditorChange = (values: any) => {
        setValue(values)
    }

    const [addSetting, { isLoading: ASLoading }] = useAddSettingMutation();
    const handleSaveSetting = async () => {
        await addSetting({
            id: conf,
            body: value
        }).unwrap().then((res) => {
            console.log(res);
        });
    }

    return (
        <>
            <div className="settings-page">
                <div className="card overview-info">
                    <header className="flex-split heads">
                        <h1>System Settings Editor</h1>
                        <div className="btn-reveal reveal-left align-right">
                            <AddSystemSetting />
                        </div>
                    </header>
                    <div className="pad">
                        <div className="form-row">
                            <div className="form-field">
                                <select
                                    defaultValue={conf}
                                    onChange={(e) => setConf(e.target.value)}
                                    name="parameterName">
                                    <option value="" selected>Select system setting</option>
                                    {params && params?.map((item: any, index: number) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className={`form-row ${conf !== '' ? '' : 'hide'}`}>
                            <div className="form-field auto ace-editor">
                                <AceEditor
                                    onChange={onEditorChange}
                                    value={value}
                                    mode="json"
                                    theme="xcode"
                                    name="UNIQUE_ID_OF_DIV"
                                    editorProps={{ $blockScrolling: true }}
                                />
                            </div>
                        </div>
                        <div className={`flex-left ${conf !== '' ? '' : 'hide'}`} >
                            <button
                                onClick={() => handleSaveSetting()}
                                className="btn btn-blue">
                                <ButtonLoaders text="Save" loading={ASLoading} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SystemEditor;