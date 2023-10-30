import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/ext-language_tools";
import { useAddSettingMutation } from "../../app/api/services/ConnectedService";
import ButtonLoaders from "../../common/sharedComponent/ButtonLoaders";
import ValidateInput from "../../common/sharedComponent/form/ValidateInput";
import Button from "../../common/sharedComponent/form/Button";
import RevealButton from "../../common/sharedComponent/form/RevealButton";
import Label from "../../common/sharedComponent/form/Label";


const AddSystemSetting = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [value, setValue] = useState("{}");

    const onEditorChange = (values: string) => {
        setValue(values)
    }


    const [addSetting, { isLoading: ASLoading }] = useAddSettingMutation();
    const handleSaveSetting = async (data: any) => {
        await addSetting({
            id: data.param_name,
            body: value
        }).unwrap().then((res) => {
            console.log(res);
            handleClose();
        });
    }


    return (
        <>
            <div>
                <RevealButton
                    icon="plus"
                    title="Add System Settings"
                    onClick={handleShow}
                />
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
                dialogClassName="modal-dialog mt-5 campaign-modal"
                size="lg">
                <Modal.Header className="m-modal-header m-compaign-header" >
                    Add System Setting
                    <span className="close" onClick={handleClose}>&times;</span>
                </Modal.Header>
                <Modal.Body className="m-modal-content">
                    <div className="p-4" >
                        <div>
                            <div className="form-group">
                                <Label id="param_name" label="Parameter Name *" />
                                <ValidateInput id="param_name" type="text" placeholder="Enter Parameter Name" register={register}
                                    label="param_name" width="320px"
                                    classes={errors?.param_name?.type === "required" ? `b-red` : ``}
                                    required={{
                                        required: true,
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <Label id="param_value" label="Parameter Value *" />
                                <div className="auto ace-editor">
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
                        </div>
                    </div>
                    <div className="p-3 mt-1">
                        <div className="m-modal-footer mb-3 m-button-groups">
                            <div className="left-group">
                                <button
                                    onClick={handleSubmit(handleSaveSetting)}
                                    className="m-btn btn-green mr-3">
                                    <ButtonLoaders text="Save Changes" loading={ASLoading} />
                                </button>
                                <Button title="Cancel" type="button" classes="m-btn secondary" onClick={handleClose} />
                            </div>
                        </div>
                    </div>
                    <br />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AddSystemSetting;
