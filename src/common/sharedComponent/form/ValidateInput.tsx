type ValidateInputProps = {
    id: string
    type: any
    placeholder?: string
    name?: string
    value?: any
    maxLength?: number
    readonly?: string
    width?: string
    label: string
    register: any
    reqIcon?: boolean
    required?: any
    classes?: string
    onChange?: (e: any) => void
}

const ValidateInput =
    ({ id, type, placeholder, width, label, name, readonly, register, reqIcon, value, maxLength, required, classes, onChange }: ValidateInputProps) => {
        return (
            <div>
                {reqIcon ? (
                    <i className="fa fa-circle m-required"></i>
                ) : null}
                <input
                    id={id}
                    type={type}
                    name={name}
                    value={value}
                    maxLength={maxLength}
                    readOnly={readonly}
                    className={`m-form-input ${classes}`}
                    placeholder={placeholder}
                    onChange={onChange}
                    style={{ width: width }}
                    {...register(label, required)}
                />
            </div>
        );
    };

export default ValidateInput;
