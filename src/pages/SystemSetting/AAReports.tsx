// NOSONAR
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AARMission from "./AARMission";
import AARAction from "./AARAction";
import AARQuestions from "./AARQuestions";
import LastQuestion from "./LastQuestion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonLoaders from "../../common/sharedComponent/ButtonLoaders";
import { formatDate } from "../../utils/getFormattedDate";
import SuccessMessage from "../../common/sharedComponent/messages/SuccessMessage";
import ErrorMessage from "../../common/sharedComponent/messages/ErrorMessage";
import { useGetAAREditQuery, useUpdateAARMutation } from "../../app/api/aar/aarApi";
import { updateFormMode, updateState } from "../../features/aar/aarInfoSlice";
import { faImage, faPencil } from "@fortawesome/free-solid-svg-icons";

const AAReports = () => {
    const dispatch = useDispatch();

    const {
        data, isSuccess,
    } = useGetAAREditQuery();

    useEffect(() => {
        if (isSuccess) {
            dispatch(updateState({ aar: data }))
        }
    }, [data, dispatch, isSuccess]);

    const meta = useSelector((state: any) => state.aar.meta);
    const sections = useSelector((state: any) => state.aar.editedInfo);
    const uneditedInfo = useSelector((state: any) => state.aar.uneditedInfo);
    const [missionOpen, setMissionOpen] = useState(true);
    const [actionOpen, setActionOpen] = useState(true);
    const [meidaOpen, setMediaOpen] = useState(true);
    const [questions, setQuestionsOpen] = useState(true);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const editedInfo = useSelector((state: any) => state.aar.editedInfo);
    const [updateAAR, { isLoading }] = useUpdateAARMutation();
    const updateReports = async () => {
        await updateAAR(editedInfo).unwrap()
            .catch((response: any) => {
                setErrorMessage(response?.data.error);
            })
            .then((response: any) => {
                if (response) {
                    dispatch(updateFormMode({ field: 'save_mode', value: true }))
                    setSuccessMessage('Report Updated Successfully');
                }
            });
    }

    const onCancel = () => {
        dispatch(updateState({ aar: uneditedInfo }))
        dispatch(updateFormMode({ field: 'save_mode', value: true }))
    }

    return (
        <>
            <div className={`settings-page ${meta.save_mode ? '' : 'edit-mode'}`}>
                {(successMessage !== '' || errorMessage !== '') && (
                    <div className="display-message">
                        <SuccessMessage message={successMessage} />
                        <ErrorMessage message={errorMessage} />
                    </div>
                )}


                <div className={`st-header ${meta.save_mode ? 'show' : 'hide'}`}>
                    <div className="flex">
                        <h1 className="flat-y">After Action Report</h1>
                        <p className="sub ml-12 flat-y color-white-faded underline weight-semibold m-3 p-2">
                            Updated {formatDate(sections?.schema_updated_at)}
                        </p>
                        <button
                            onClick={() => dispatch(updateFormMode({ field: 'save_mode', value: false }))}
                            className="btn align-right" style={{ width: "110px" }}>
                            <FontAwesomeIcon icon={faPencil} /> &nbsp;
                            Edit
                        </button>
                    </div>
                    <p className="mt-16 mb-40">
                        Customize AAR questions and responses presented to users across the system
                    </p>
                </div>

                <div className={`flex mb-40 ${meta.save_mode ? 'hide' : 'show'}`}>
                    <h1 className="flat-y">Edit After Action Report</h1>
                    <div className="flex align-right">
                        <button
                            onClick={() => onCancel()}
                            className="action-link mr-25">
                            Cancel
                        </button>
                        <button
                            onClick={() => updateReports()}
                            className="btn btn-blue"
                            style={{ width: "160px" }}>
                            <ButtonLoaders text="Update" loading={isLoading} />
                        </button>
                    </div>
                </div>

                <div className={`accordion mt-4 ${missionOpen ? 'open-accordion' : 'close-accordion'}`}>
                    <header onClick={() => setMissionOpen(missionOpen ? false : true)}>
                        <h5>Mission Details</h5>
                        <i className={`fa  align-right ${missionOpen ? 'fa-caret-up' : 'fa-caret-down   '}`}></i>
                    </header>
                    <div className="accordion-body">
                        <AARMission mission={sections.sections[0]} />
                    </div>
                </div>

                <div className={`accordion aar-accordion ${actionOpen ? 'open-accordion' : 'close-accordion'}`}>
                    <header onClick={() => setActionOpen(actionOpen ? false : true)}>
                        <h5>Actions</h5>
                        <i className={`fa  align-right ${actionOpen ? 'fa-caret-up' : 'fa-caret-down   '}`}></i>
                    </header>
                    <div className="accordion-body">
                        <AARAction actions={sections.sections[1]} />
                    </div>
                </div>

                <div className={`accordion aar-accordion ${meidaOpen ? 'open-accordion' : 'close-accordion'}`}>
                    <header onClick={() => setMediaOpen(meidaOpen ? false : true)}>
                        <h5>FILES & MEDIA</h5>
                        <i className={`fa  align-right ${meidaOpen ? 'fa-caret-up' : 'fa-caret-down   '}`}></i>
                    </header>
                    <div className="accordion-body">
                        <div className={`flex mt-2 ${meta?.save_mode === true ? "show" : "hide"}`}>
                            <div className="aar-image-placeholder">
                                <FontAwesomeIcon icon={faImage} />
                            </div>
                            <div className="aar-image-placeholder">
                                <FontAwesomeIcon icon={faImage} />
                            </div>
                            <div className="aar-image-placeholder">
                                <FontAwesomeIcon icon={faImage} />
                            </div>
                            <div className="aar-image-placeholder">
                                <FontAwesomeIcon icon={faImage} />
                            </div>
                        </div>
                        <small className={`${meta?.save_mode === true ? "hide" : "show"}`} style={{ fontSize: "16px" }}>No questions or description</small>
                    </div>
                </div>

                <div className={`accordion aar-accordion  ${questions ? 'open-accordion' : 'close-accordion'}`}>
                    <header onClick={() => setQuestionsOpen(questions ? false : true)}>
                        <h5>ADDITIONAL QUESTIONS</h5>
                        <i className={`fa  align-right ${questions ? 'fa-caret-up' : 'fa-caret-down   '}`}></i>
                    </header>
                    <div className="accordion-body flat-bottom ">
                        <AARQuestions aarQuestion={sections.sections[3]} />
                        <LastQuestion item={sections.sections[3].fields[5]} index={5} order={3} />
                    </div>
                </div>

                <div className={`flex mt-40 ${meta.save_mode ? 'hide' : 'show'}`}>
                    <button
                        onClick={() => updateReports()}
                        className="btn btn-blue" style={{ width: "160px" }}>
                        <ButtonLoaders text="Update" loading={isLoading} />
                    </button>
                    <button
                        onClick={() => onCancel()}
                        className="action-link ml-25">Cancel</button>
                </div>
            </div>
        </>
    );
}

export default AAReports;