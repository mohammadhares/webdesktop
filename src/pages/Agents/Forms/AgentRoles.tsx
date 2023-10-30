import { convertRoleName } from "../AgentsMixin";

type AgentRolesProps = {
  register: any
  error: boolean
  userRoles: any
  selectedRole?: string
};

const AgentRoles = ({ userRoles, register, error, selectedRole }: AgentRolesProps) => {
  console.log(selectedRole);
  
  return (
    <select
      name="user_role"
      {...register("user_role", { required: true })}
      className={`${error ? 'border-red' : ''}`}
      id="a-role">
      <option value="" hidden></option>
      {userRoles?.filter(
        (val: any) =>
          val.name !== "uma_authorization" &&
          val.name !== "offline_access" &&
          val.name !== "SYSTEM" &&
          val.name !== "default-roles-ascalon"
      )
        ?.map((item: any) => (
          <option
            selected={selectedRole === item?.name}
            key={item?.id}
            value={`{  
                "id": "${item?.id}" , 
                "name": "${item?.name}" ,
                "composite" : ${item?.composite} ,
                "clientRole": ${item?.clientRole} ,
                "containerId": "${item?.containerId}" }`}>
            {convertRoleName(item?.name)}
          </option>
        ))}
    </select>
  );
};

export default AgentRoles;
