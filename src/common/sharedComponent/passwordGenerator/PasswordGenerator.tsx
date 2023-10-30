import { useState } from "react";
import { generatePassword } from "./Generator";

interface PasswordGeneratorProps {
    onUsePassword: (value: string) => void
    minLength: number
    maxLength: number
    requiredUpperCase: boolean
    requiredLowerCase: boolean
    requiredNumber: boolean
    requiredSymbole: boolean

}

const PasswordGenerator = (props: PasswordGeneratorProps) => {

    const { onUsePassword, minLength, maxLength,
        requiredLowerCase, requiredNumber,
        requiredSymbole, requiredUpperCase } = props;

    const [show, setShow] = useState(false);
    const [showOption, setShowOptions] = useState(false);
    const [password, setPassword] = useState('');
    const [savePassword, setSavePassword] = useState(false);

    const [length, setLength] = useState(minLength);
    const [upperCase, setUpperCase] = useState(true);
    const [lowerCase, setLowerCase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSubmols] = useState(true);

    const handleGenerate = () => {
        const gen_pass = generatePassword({
            length: length,
            includeLowerCase: lowerCase,
            includeNumber: numbers,
            includeSymbols: symbols,
            includeUpperCase: upperCase,
        });
        setPassword(gen_pass);
    }

    const hanldeUsePassword = () => {
        if (savePassword && password !== '' && password.length === length) {
            onUsePassword(password)
        }
    }

    const handleCancel = () => {
        onUsePassword('');
        setShow(false);
        setSavePassword(false);
    }

    return (
        <>
            {!show ? (
                <div
                    onClick={() => setShow(true)}
                    className="action-link pass-generator">
                    Password Generator
                </div>
            ) : (
                <div className="pass-genertor-form">
                    <div className="pcw-row flex">
                        <div className="field flex">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="text"
                                name="password"
                                readOnly
                                maxLength={100}
                                style={{ width: '240px', }}
                            />
                            <button
                                type="button"
                                onClick={handleGenerate}
                                className="pbtn">
                                Generate
                            </button>
                        </div>
                    </div>
                    <div
                        onClick={() => setShowOptions(!showOption)}
                        className="action-link pass-generator mt-1">
                        Advance Option
                    </div>
                    {showOption && (
                        <div className=" p-3">
                            <div className="flex input-range">
                                <p>Length</p>
                                <input
                                    id="length"
                                    value={length}
                                    onChange={(e) => setLength(+e.target.value)}
                                    type="range"
                                    min={minLength}
                                    max={maxLength}
                                />
                                <p>{length}</p>
                            </div>
                            <div className="advance-option mt-3">
                                <div className="option-section">
                                    <div className="check-item">
                                        <input
                                            checked={numbers}
                                            disabled={requiredNumber}
                                            onChange={(e) => setNumbers(e.target.checked)}
                                            id="include_number" type="checkbox"
                                        />
                                        <label htmlFor="include_number" className="agent-check">
                                            <span className="ch-label">Include Number</span>
                                        </label>
                                    </div>
                                    <div className="check-item mt-2">
                                        <input
                                            checked={symbols}
                                            disabled={requiredSymbole}
                                            onChange={(e) => setSubmols(e.target.checked)}
                                            id="include_symbols" type="checkbox"
                                        />
                                        <label htmlFor="include_symbols" className="agent-check">
                                            <span className="ch-label">Include Symbols</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="option-section">
                                    <div className="check-item">
                                        <input
                                            checked={upperCase}
                                            disabled={requiredUpperCase}
                                            onChange={(e) => setUpperCase(e.target.checked)}
                                            id="include_uppercase" type="checkbox"
                                        />
                                        <label htmlFor="include_uppercase" className="agent-check">
                                            <span className="ch-label">Include Uppercase</span>
                                        </label>
                                    </div>
                                    <div className="check-item mt-2">
                                        <input
                                            disabled={requiredLowerCase}
                                            checked={lowerCase}
                                            onChange={(e) => setLowerCase(e.target.checked)}
                                            id="include_lowercase" type="checkbox"
                                        />
                                        <label htmlFor="include_lowercase" className="agent-check">
                                            <span className="ch-label">Include LowerCase</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="check-item mt-4">
                        <input
                            checked={savePassword}
                            onChange={(e) => setSavePassword(e.target.checked)}
                            id="persona_files" type="checkbox"
                        />
                        <label htmlFor="persona_files" className="agent-check">
                            <span className="ch-label"><small>I have copied this password in a safe place.</small></span>
                        </label>
                    </div>

                    <div className="form-footer flex mt-0">
                        <button
                            type="button"
                            onClick={hanldeUsePassword}
                            disabled={!(savePassword && password !== '' && password.length === length)}
                            className="pbtn">
                            Use Password
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="pbtn">
                            Cancel
                        </button>
                    </div>

                    <hr />
                </div>
            )}

        </>
    );
}

export default PasswordGenerator;