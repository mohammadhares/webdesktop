import { useState } from "react";
import { AgentPermissionProps } from "../AgentTypes";


const AgentPermissions = ({ onSetMmsAction, onSetSmsAction }: AgentPermissionProps) => {

    const [mms, setMms] = useState('');
    const [sms, setSms] = useState('');

    const updateInfo = (value: string, type: string) => {
        if (type === 'MMS') {
            setMms(value);
            if (value === 'view') {
                onSetMmsAction(['view']);
            } else if (value === 'send') {
                onSetMmsAction(['view', 'send'])
            } else {
                onSetMmsAction([])
            }
        } else {
            setSms(value);
            if (value === 'view') {
                onSetSmsAction(['view']);
            } else if (value === 'send') {
                onSetSmsAction(['view', 'send'])
            } else {
                onSetSmsAction([])
            }
        }
    }
    return (
        <div className="two-up">
            <div className="col">
                <h4>SMS</h4>
                <div className="radio-group-v">
                    <div>
                        <input
                            id="sms-none"
                            type="radio"
                            value="0"
                            checked={mms === ''}
                            onChange={() => updateInfo('', 'MMS')}
                        />
                        <label htmlFor="sms-none">No SMS</label>
                    </div>
                    <div>
                        <input
                            id="sms-read"
                            type="radio"
                            value="1"
                            checked={mms === 'view'}
                            onChange={() => updateInfo('view', 'MMS')}
                        />
                        <label htmlFor="sms-read">View SMS only</label>
                    </div>
                    <div>
                        <input
                            id="sms-write"
                            type="radio"
                            value="2"
                            checked={mms === 'send'}
                            onChange={() => updateInfo('send', 'MMS')}
                        />
                        <label htmlFor="sms-write">Send and view SMS</label>
                    </div>
                </div>
            </div>
            <div className="col">
                <h4>MMS</h4>
                <div className="radio-group-v">
                    <div>
                        <input
                            id="mms-none"
                            type="radio"
                            value="0"
                            checked={sms === ''}
                            onChange={() => updateInfo('', 'SMS')}
                        />
                        <label htmlFor="mms-none">No MMS</label>
                    </div>
                    <div>
                        <input
                            id="mms-read"
                            type="radio"
                            value="1"
                            checked={sms === 'view'}
                            onChange={() => updateInfo('view', 'SMS')}
                        />
                        <label htmlFor="mms-read">View MMS only</label>
                    </div>
                    <div>
                        <input
                            id="mms-write"
                            type="radio"
                            value="2"
                            checked={sms === 'send'}
                            onChange={() => updateInfo('send', 'SMS')}
                        />
                        <label htmlFor="mms-write">Send and view MMS</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgentPermissions;