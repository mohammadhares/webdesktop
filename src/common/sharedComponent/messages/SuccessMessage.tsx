const SuccessMessage = (props: { message : string }) => {
    return ( 
        <div className={`error success inline ${props.message !== "" ? 'show' : 'hide'}`}>
            <i className="fa fa-info"></i>
            <span className="message">
                &nbsp; {props.message}
            </span>
        </div>
     );
}
 
export default SuccessMessage;