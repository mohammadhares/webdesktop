import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateInfo } from "../../features/aar/aarInfoSlice";

interface AARQuestionsProps {
    item: any
    index: number
    order: number
}

const LastQuestion = (props: AARQuestionsProps) => {

    const { item, index, order } = props;
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [label, setLabel] = useState('');
    const [subText, setSubText] = useState('');
    const [hasSubText, setHasSubText] = useState(false);

    useEffect(() => {
        setLabel(item.label);
        setSubText(item.subtext);
        setHasSubText(item.hasSubtext);
    }, [item.hasSubtext, item.label, item.subtext]);

    const onDone = () => {
        dispatch(updateInfo({ order: order, index: index, field: 'label', value: label }));
        dispatch(updateInfo({ order: order, index: index, field: 'subtext', value: subText }));
        dispatch(updateInfo({ order: order, index: index, field: 'hasSubtext', value: hasSubText }));
        setShow(false);
    }

    const onCancel = () => {
        setLabel(item.label);
        setSubText(item.subtext);
        setHasSubText(item.hasSubtext);
        setShow(false);
    }

    return (
        <div className="settings-aar-question">
            <div
                onClick={() => setShow(true)}
                className={`saved ${show ? 'hide' : 'show'}`}>
                <p className="weight-semibold flat-y">
                    {item.label}
                </p>
                {hasSubText && <small className={`question-subtext`}>  {item.subtext}</small>}
                <textarea className="border mt-25 aar-textarea" />
            </div>


            <div className={`edits ${show ? 'show' : 'hide'}`} >
                <div className="flex-split mb-25">
                    <h5>paragraph</h5>
                    <h5>Required</h5>
                </div>
                <label className="weight-semibold">Question</label>
                <input
                    defaultValue={label}
                    onChange={(e) => setLabel(e.target.value)}
                    type="text"
                    className="mt-8"
                />

                <div className="checkbox-row mt-16 ml-16">
                    <input
                        defaultChecked={hasSubText}
                        onChange={(e) => setHasSubText(e.target.checked)}
                        id="q-aar_last_question_details-subtext"
                        type="checkbox"
                    />
                    <label
                        className="aar-checkbox-dp"
                        htmlFor="q-aar_last_question_details-subtext">
                        Add helper subtext
                    </label>
                </div>

                <input
                    defaultValue={subText}
                    onChange={(e) => setSubText(e.target.value)}
                    type="text" className={`ml-16 mt-16 ${hasSubText ? 'show' : 'hide'}`}
                />

                <div className="mt-32">
                    <button
                        onClick={() => onDone()}
                        className="btn btn-blue"
                        style={{ width: "160px " }}>
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

export default LastQuestion;
