const ErrorMessage = (props: { message: string }) => {

    return (
        <div className={`error inline ${props.message !== "" ? 'show' : 'hide'}`}>
            <i className="fa fa-warning"></i>
            <span className="message">
                &nbsp; {props.message}
            </span>
        </div>
    );
}

export default ErrorMessage;