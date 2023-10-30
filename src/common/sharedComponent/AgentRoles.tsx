import { useEffect, useState } from "react";
import Loader from "./Loader";
import { useGetUserRolesQuery } from "../../app/api/agent/agentApi";
import { getRoleName } from "../../pages/Agents/AgentsMixin";

export const AgentRoles = ({userId} : { userId : string}) => {
    const [role, setRole] = useState('');
    const { 
        data , 
        isLoading , 
        isSuccess , 
        isError 
    } = useGetUserRolesQuery(userId);

    useEffect(() => {
        if(isSuccess && data.length > 0){
            data?.forEach((item: any ) => {
                if(item?.name !== 'default-roles-ascalon'){
                    setRole(item?.name)
                }
            });
        }
    },[isSuccess , data])

    return ( 
        <>
            {isLoading && <Loader />}
            {isError && 'None'}
            {isSuccess && getRoleName(role)}
        </>
     );
}
 
