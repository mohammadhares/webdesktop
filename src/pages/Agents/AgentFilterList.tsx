import { useDispatch } from "react-redux";
import { FilterItem } from "./AgentTypes";
import { clearAll, removeFilter, removeSearch } from "../../features/agents/agentSlice";

interface FilterProps {
    data: any
}

const AgentFilterList = (props: FilterProps) => {

    const { data } = props;
    const dispatch = useDispatch();
    let count = 0;
    data.status.forEach((item: FilterItem) => item.isChecked === true ? count++ : count)
    data.role.forEach((item: FilterItem) => item.isChecked === true ? count++ : count)
    data.mission.forEach((item: FilterItem) => item.isChecked === true ? count++ : count)
    data.team.forEach((item: FilterItem) => item.isChecked === true ? count++ : count)
    if (data.search.search_query !== '') count++;

    return (
        <>
            <div className={`active-filters ${count > 0 ? '' : 'hide'}`}>
                <div className="num-filters">{count} Filters</div>
                <div className="tag-wrap">
                    {data.status.filter((item: FilterItem) => item.isChecked === true).map((item : any, i: number) => (
                        <button
                            onClick={() => {
                                dispatch(removeFilter({ category: 'status', value: item.value }))
                            }}
                            key={i} type="button" name="button" className="tag">
                            Agent Status: {item.label}
                        </button>
                    ))}

                    {data?.role.filter((item: FilterItem) => item.isChecked === true).map((item : any, i: number) => (
                        <button
                            onClick={() => dispatch(removeFilter({ category: 'role', value: item.value }))}
                            key={i} type="button" name="button" className="tag">
                            Role: {item.label}
                        </button>
                    ))}

                    {data.mission.filter((item: FilterItem) => item.isChecked === true).map((item : any, i: number) => (
                        <button
                            onClick={() => dispatch(removeFilter({ category: 'mission', value: item.value }))}
                            key={i} type="button" name="button" className="tag">
                            Mission: {item.label}
                        </button>
                    ))}
                    {data?.team.filter((item: FilterItem) => item.isChecked === true).map((item : any, i: number) => (
                        <button
                            onClick={() => dispatch(removeFilter({ category: 'team', value: item.value }))}
                            key={i} type="button" name="button" className="tag">
                            Team: {item.label}
                        </button>
                    ))}
                    {data.search.search_query !== '' ? (
                        <button
                            onClick={() => dispatch(removeSearch())}
                            type="button" name="button" className="tag">
                            ID Search : {data.search.search_query}
                        </button>
                    ) : undefined}
                </div>
                <button
                    onClick={() => dispatch(clearAll())}
                    className="action-link align-right">
                    Clear
                </button>
            </div>
        </>
    );
}

export default AgentFilterList;