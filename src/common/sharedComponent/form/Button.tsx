export type ButtonProps = {
    type?: any
    isLoading?: boolean
    classes?: string
    title: string | any
    form?: string
    onClick?: () => void
}

const Button = (props: ButtonProps) => {
    return (
        <button
            type={props.type}
            className={`m-form-btn ${props.classes}`}
            form={props.form}
            onClick={props.onClick}>
            {props.title}
        </button>
    );
}

export default Button;