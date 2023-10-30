import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateAARResponse, updateInfo } from "../../features/aar/aarInfoSlice";

interface SingleQuestionProps {
    item: any
    index: number
    order: number
}
const SingleQuestion = (props: SingleQuestionProps) => {

    const { item, index, order } = props;
    const dispatch = useDispatch();
    const meta = useSelector((state: any) => state.aar.meta);

    const [show, setShow] = useState(false);
    const [label, setLabel] = useState('');
    const [subText, setSubText] = useState('');
    const [hasSubText, setHasSubText] = useState(false);
    const [firstResponse, setFirstResponse] = useState('');
    const [secondResponse, setSecondResponse] = useState('');
    const [hasComments, setHasComments] = useState(false);

    useEffect(() => {
        setLabel(item.label);
        setSubText(item.subtext);
        setHasSubText(item.hasSubtext);
        setFirstResponse(item.choices[0].label);
        setSecondResponse(item.choices[1].label);
        setHasComments(item.hasComments);
    }, [item.choices, item.hasComments, item.hasSubtext, item.label, item.subtext]);

    const onDone = () => {
        dispatch(updateInfo({ order: order, index: index, field: 'label', value: label }));
        dispatch(updateInfo({ order: order, index: index, field: 'subtext', value: subText }));
        dispatch(updateInfo({ order: order, index: index, field: 'hasSubtext', value: hasSubText }));
        dispatch(updateInfo({ order: order, index: index, field: 'hasComments', value: hasSubText }));
        dispatch(updateAARResponse({ order: order, index: index, subIndex: 0, field: 'choices', value: firstResponse }));
        dispatch(updateAARResponse({ order: order, index: index, subIndex: 1, field: 'choices', value: secondResponse }));
        setShow(false);
    }

    const onCancel = () => {
        setLabel(item.label);
        setSubText(item.subtext);
        setHasSubText(item.hasSubtext);
        setFirstResponse(item.choices[0].label);
        setSecondResponse(item.choices[1].label);
        setHasComments(item.hasComments);
        setShow(false);
    }

    return (
        <div className="settings-aar-question" key={index}>
            <div
                onClick={() => meta.save_mode ? null : setShow(true)}
                className={`saved ${show ? 'hide' : ''}`}>
                <p className="weight-semibold flat-y">{item.label}</p>
                <small className={`question-subtext ${item.hasSubtext ? '' : 'hide'}`}>
                    {item.subtext}
                </small>
                <div className="radio-group-v m-agent-form entity-assignment  checkbox-group-items flex mt-25">
                    <div>
                        <input id={`custom-radio-yes-${index}`} type="radio" className="custom-radio" />
                        <label htmlFor={`custom-radio-yes-${index}`}>{item.choices[0].label}</label>
                    </div>
                    <div>
                        <input id={`custom-radio-no-${index}`} type="radio" className="custom-radio" />
                        <label htmlFor={`custom-radio-no-${index}`}>{item.choices[1].label}</label>
                    </div>
                </div>
            </div>

            <div className={`edits ${show ? 'show' : 'hide'}`}>
                <div className="flex-split mb-25">
                    <h5>Multiple Choice</h5>
                    <h5>Required</h5>
                </div>
                <label htmlFor={`label-${index}`} className="weight-semibold">Question</label>
                <input
                    id={`label-${index}`}
                    onChange={(e) => setLabel(e.target.value)}
                    defaultValue={label}
                    type="text"
                    className="mt-8"
                />

                <div className="checkbox-row mt-16 ml-16">
                    <input
                        defaultChecked={hasSubText}
                        onChange={(e) => setHasSubText(e.target.checked)}
                        id={`q-aar_questions_details-subtext-${index}`}
                        type="checkbox"
                    />
                    <label
                        className="aar-checkbox-dp"
                        htmlFor={`q-aar_questions_details-subtext-${index}`}>
                        Add helper subtext
                    </label>
                </div>

                <input
                    id={`subtext-${index}`}
                    defaultValue={subText}
                    onChange={(e) => setSubText(e.target.value)}
                    type="text"
                    className={`ml-16 mt-16 ${hasSubText ? 'show' : 'hide'}`}
                />

                <label className="weight-semibold mt-25 mb-8">Responses</label>
                <div className="choice-row radio">
                    <input
                        id={`first_response-${index}`}
                        defaultValue={firstResponse}
                        onChange={(e) => setFirstResponse(e.target.value)}
                        type="text"
                    />
                </div>
                <div className="choice-row radio">
                    <input
                        id={`second_response-${index}`}
                        defaultValue={secondResponse}
                        onChange={(e) => setSecondResponse(e.target.value)}
                        type="text"
                    />
                </div>


                <div className="checkbox-row mt-16 ml-16">
                    <input
                        defaultChecked={hasComments}
                        onChange={(e) => setHasComments(e.target.checked)}
                        id={`q-aar_questions_files_downloaded-comments-${index}`}
                        type="checkbox"
                    />
                    <label
                        className="aar-checkbox-dp"
                        htmlFor={`q-aar_questions_files_downloaded-comments-${index}`}>
                        Include comments field
                    </label>
                </div>

                <div className="mt-32">
                    <button
                        onClick={() => onDone()}
                        className="btn btn-blue"
                        style={{ width: "160px" }}>
                        Done
                    </button>
                    <button
                        onClick={() => onCancel()}
                        className="action-link ml-25">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SingleQuestion;