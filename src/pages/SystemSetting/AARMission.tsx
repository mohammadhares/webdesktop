import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateFormMode, updateInfo } from "../../features/aar/aarInfoSlice";

interface MissionProps {
    mission: any
}

const AARMission = ({ mission }: MissionProps) => {
    const dispatch = useDispatch();
    const meta = useSelector((state: any) => state.aar.meta);
    const [label, setLabel] = useState('');
    const [subText, setSubText] = useState('');
    const [hasSubText, setHasSubText] = useState(mission?.fields[0].hasSubText);

    useEffect(() => {
        setLabel(mission?.fields[0].label);
        setSubText(mission?.fields[0].subtext);
        setHasSubText(mission?.fields[0].hasSubText);
    }, [mission?.fields]);

    const onDone = () => {
        dispatch(updateInfo({ order: 0, index: 0, field: 'label', value: label }));
        dispatch(updateInfo({ order: 0, index: 0, field: 'subtext', value: subText }));
        dispatch(updateInfo({ order: 0, index: 0, field: 'hasSubText', value: hasSubText }));
        dispatch(updateFormMode({ field: 'editMission', value: false }))
    }


    const onCancel = () => {
        setLabel(mission?.fields[0].label);
        setSubText(mission?.fields[0].subtext);
        setHasSubText(mission?.fields[0].hasSubText);
        dispatch(updateFormMode({ field: 'editMission', value: false }))
    }

    return (
        mission?.fields.map((item: any, index: number) => (
            <div className="settings-aar-question" key={index}>
                {!meta.editMission && (
                    <div
                        className={`saved`}
                        onClick={() => !meta.save_mode && dispatch(updateFormMode({ field: 'editMission', value: true }))}>
                        <p className="weight-semibold flat-y"> {item.label}</p>
                        {hasSubText && <small className={`question-subtext`}>  {item.subtext}</small>}
                        <textarea className="border mt-25 aar-textarea" />
                    </div>
                )}

                {meta.editMission && (
                    <div className={`edits`} >
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
                                id="q-aar_mission_details-subtext"
                                type="checkbox"
                            />
                            <label
                                className="aar-checkbox-dp"
                                htmlFor="q-aar_mission_details-subtext">
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
                                className="btn btn-blue" style={{ width: "160px " }}>Done</button>
                            <button
                                onClick={() => onCancel()}
                                className="action-link ml-25">Cancel</button>
                        </div>
                    </div>
                )}

            </div>
        ))
    );
}

export default AARMission;