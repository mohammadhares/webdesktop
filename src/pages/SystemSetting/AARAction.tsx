import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateFormMode, updateInfo } from "../../features/aar/aarInfoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

interface AARActionProps {
    actions: any
}

const AARAction = ({ actions }: AARActionProps) => {
    const dispatch = useDispatch();
    const meta = useSelector((state: any) => state.aar.meta);
    const [label, setLabel] = useState('');
    const [subText, setSubText] = useState('');
    const [hasSubtext, setHasSubText] = useState(false);

    useEffect(() => {
        setLabel(actions?.fields[0].label);
        setSubText(actions?.fields[0].subtext);
        setHasSubText(actions?.fields[0].hasSubtext);
    }, [actions?.fields]);

    const onDone = () => {
        dispatch(updateInfo({ order: 1, index: 0, field: 'label', value: label }));
        dispatch(updateInfo({ order: 1, index: 0, field: 'subtext', value: subText }));
        dispatch(updateInfo({ order: 1, index: 0, field: 'hasSubtext', value: hasSubtext }));
        dispatch(updateFormMode({ field: 'editAARAction', value: false }))
    }


    const onCancel = () => {
        setLabel(actions?.fields[0].label);
        setSubText(actions?.fields[0].subtext);
        setHasSubText(actions?.fields[0].hasSubtext);
        dispatch(updateFormMode({ field: 'editAARAction', value: false }))
    }

    return (
        <>
            {actions?.fields.map((item: any, index: number) => (
                <div key={index}>
                    {meta.save_mode && (
                        <div>
                            <p className="weight-semibold flat-y">{item.label}</p>
                            <small className="question-subtext">{item.subtext}</small>
                            <p className="text-center sub mb-12 mt-25">181116JSEP19</p>
                            <div className="aar-action flex">
                                <div
                                    className="bubble"
                                    style={{ flex: "1 1 auto" }}>
                                    <span>
                                        Sample action response by user Mauris non tempor quam, et
                                        lacinia sapien. Mauris accumsan eros eget
                                    </span>
                                </div>
                                <div className="time">11:18</div>
                            </div>
                            <div className="aar-action flex">
                                <div
                                    className="bubble"
                                    style={{ flex: "1 1 auto" }}>
                                    <span>
                                        Sample action response by user Mauris non tempor quam, et
                                        lacinia sapien. Mauris accumsan eros eget
                                    </span>
                                </div>
                                <div className="time">11:22</div>
                            </div>
                            <form className="add-action flex-split mt-4">
                                <input
                                    placeholder="Enter activity"
                                    type="text"
                                    style={{ flex: "1 1 auto" }}
                                />
                                <button
                                    type="button"
                                    className="flex-center">
                                    <FontAwesomeIcon icon={faArrowUp} />
                                </button>
                            </form>
                        </div>
                    )}

                    <div
                        onClick={() => !meta.save_mode && dispatch(updateFormMode({ field: 'editAARAction', value: true }))}
                        className={`saved ${meta.save_mode === true || meta.editAARAction ? 'hide' : 'show'}`}>
                        <p className="weight-semibold flat-y">{item.label}</p>
                        {item.hasSubtext && <small className={`question-subtext `}>{item.subtext}</small>}
                    </div>

                    <div className="settings-aar-question">
                        <div className={`edits ${meta.editAARAction ? 'show' : 'hide'}`} >
                            <div className="flex-split mb-25">
                                <h5>paragraph</h5>
                                <h5>Required</h5>
                            </div>
                            <label className="weight-semibold">Question</label>
                            <input
                                defaultValue={label}
                                onChange={(e) => setLabel(e.target.value)}
                                type="text" className="mt-8"
                            />

                            <div className="checkbox-row mt-16 ml-16">
                                <input
                                    defaultChecked={hasSubtext}
                                    onChange={(e) => setHasSubText(e.target.checked)}
                                    id="q-aar_action_details-subtext"
                                    type="checkbox"
                                />
                                <label
                                    className="aar-checkbox-dp"
                                    htmlFor="q-aar_action_details-subtext">
                                    Add helper subtext
                                </label>
                            </div>

                            <input
                                defaultValue={subText}
                                onChange={(e) => setSubText(e.target.value)}
                                type="text"
                                className={`ml-16 mt-16 ${hasSubtext ? 'show' : 'hide'}`}
                            />

                            <div className="mt-32">
                                <button
                                    onClick={() => onDone()}
                                    className="btn btn-blue" style={{ width: "160px " }}>Done</button>
                                <button
                                    onClick={() => onCancel()}
                                    className="action-link ml-25">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>

    );
}

export default AARAction;