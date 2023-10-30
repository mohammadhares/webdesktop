const AgentStatus = ({ status }: { status: string }) => {
    let statusClass;
    let statusTitle;
    if (status === 'ACTIVE') {
        statusClass = 'green'
        statusTitle = 'Active'
    } else if (status === 'PENDING') {
        statusClass = 'yellow'
        statusTitle = 'Pending'
    } else if (status === 'INACTIVE') {
        statusClass = 'red'
        statusTitle = 'Inactive'
    }

    return (
        <>
            <div className={`status-dot ${statusClass}`}></div> 
            {statusTitle} 
        </>  
    );
}

export default AgentStatus;