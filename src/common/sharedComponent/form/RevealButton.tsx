const RevealButton = (props : { icon : string , title: string , onClick ?: () => void }) => {
    return ( 
        <div className="btn-reveal">
            <button className="rev-btn" onClick={ props.onClick}>
                <i className={`fa fa-${props.icon}`}></i>
            </button>
            <span>{props.title}</span>
        </div>
     );
}
 
export default RevealButton;