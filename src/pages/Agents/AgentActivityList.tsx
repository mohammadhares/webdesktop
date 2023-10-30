import { ReactElement, useState } from 'react';
import Loader from '../../common/sharedComponent/Loader';
import { useGetAllActivityQuery } from '../../app/api/services/ConnectedService';
import { formatDate } from '../../utils/getFormattedDate';
import Pagination from '../../common/sharedComponent/Pagination';
import { activityIcons, badgeColor, description } from '../../common/sharedComponent/Activity';



const AgentActivityList = (props: { id: number | string }) => {

    const [page, setPage] = useState(0);
    const [pageSize] = useState(10);
    const {
        data: activities,
        isSuccess: activity_success,
        isLoading: activity_loading,
        isError: activity_error,
    } = useGetAllActivityQuery(`user_id=${props?.id}&page_num=${page}&per_page=${pageSize}`);

    let content: ReactElement = <></>;
    if (activity_loading) {
        content = <tr><td colSpan={4}><Loader /></td></tr>;
    } else if (activity_success) {
        content = <RenderActivityData data={activities} />;
    } else if (activity_error) {
        content = <tr><td colSpan={4}></td></tr>;
    }

    return (
        <div className="card">
            <header>
                <h3>Activity</h3>
            </header>
            <div className="table-wrap">
                <table className="table--activity">
                    <thead></thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
            <div className='p-1'>
                {activities?.meta?.total > pageSize && (
                    <Pagination
                        total_item={activities?.meta?.total}
                        page_size={pageSize}
                        current_page={page}
                        pages={Math.ceil(activities?.meta?.total / pageSize)}
                        page={setPage}
                    />
                )}
            </div>
        </div>
    );
}


const RenderActivityData = ({ data: activity }: { data: any }) => {
    if (activity?.data?.length === 0) {
        return (
            <tr>
                <td colSpan={4} className="text-center no-activty p-3"> <small>There is No Activity</small></td>
            </tr>
        );
    }

    return (
        <>
            {activity?.data?.map((item: any, index: number) => (
                <tr key={index}>
                    <td>
                        <div className={`icon-badge ${badgeColor(item)} `}>
                            <i className={`fa fa-${activityIcons(item)}`}></i>
                        </div>
                    </td>
                    <td className='activity-description'>
                        <div className='action-link caps'>
                            {item?.agent_id}
                        </div>
                        {` ${description(item)} `}
                        <div className='action-link caps'>
                            {item?.persona_id}
                        </div>
                    </td>
                    <td style={{ width: "150px" }}>
                        {formatDate(item?.timestamp)}
                    </td>
                </tr>
            ))}
        </>
    );
}

export default AgentActivityList;
