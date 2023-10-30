type LabelProps = {
     size?: string
     id?: string 
     label?: string
     label_icon?: string
     toltip?: string
}

const Label = (props : LabelProps) => {
    return ( 
        <label className="m-form-label" style={{ fontSize: props.size}}
             htmlFor={props.id}>{props.label}
             { props.label_icon ? (
               <i title={props.toltip} className={` m-2 fa fa-${props.label_icon}`}></i>
             ) : <span> </span>}
             
        </label>
     );
}
 
export default Label;