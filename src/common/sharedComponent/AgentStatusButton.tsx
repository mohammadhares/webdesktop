const AgentStatusButton = ({ status , classes }: { status: string , classes : string }) => {
    let statusClass;
    let statusTitle;
    if (status === 'ACTIVE') {
        statusClass = 'pill--green'
        statusTitle = 'Active'
    } else if (status === 'PENDING') {
        statusClass = 'pill--yellow'
        statusTitle = 'Pending'
    } else if (status === 'INACTIVE') {
        statusClass = 'pill--red'
        statusTitle = 'Inactive'
    }

    return (
        <div className={`${classes} ${statusClass}`}>
            {statusTitle}
        </div>
    );
}

export default AgentStatusButton;