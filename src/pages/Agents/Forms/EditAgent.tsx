// NOSONAR
import { faEye , faCaretDown , faEyeSlash , faAngleLeft , faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ButtonLoaders from "../../../common/sharedComponent/ButtonLoaders";
import { useDispatch, useSelector } from "react-redux";
import { updateSection } from "../../../features/agents/agentSlice";
import { useForm } from "react-hook-form";
import AgentPermissions from "./AgentPermissions";
import AgentRoles from "./AgentRoles";
import {
    useAssignRoleMutation, useDestroyTOTPMutation, useGetRolesQuery,
    useGetSingleAgentMutation, useGetUserCredentialsQuery, useUpdateUserMutation
} from "../../../app/api/agent/agentApi";
import { useAssignPermissionMutation } from "../../../app/api/services/ConnectedService";
import { getTotpId } from "../AgentsMixin";
import PasswordGenerator from "../../../common/sharedComponent/passwordGenerator/PasswordGenerator";
import SuccessMessage from "../../../common/sharedComponent/messages/SuccessMessage";
import ToolTip from "../../../common/sharedComponent/Tooltip";

const EditAgent = () => {

    const dispatch = useDispatch();
    const agent = useSelector((state: any) => state.agents.agent);
    const [resetPassword, setResetPassword] = useState(false);
    const [detailSection, setDetailSection] = useState(true);
    const [permissionSection, setPermissionSection] = useState(true);
    const [viewPassword, setViewPassword] = useState(false);
    const [MFA, setMFA] = useState(agent?.mfa_enabled);
    const [TOTP, setTOTP] = useState(agent?.totp_enabled);
    const [mmsAction, setMmsAction] = useState<string[]>([]);
    const [smsAction, setSmsAction] = useState<string[]>([]);
    const [successMessage, setSuccessMessage] = useState('');
    const {
        register,
        handleSubmit,
        watch, setValue,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        setValue('status', agent?.status);
        setValue('agent_id', agent?.agent_id);
    }, [
        agent?.agent_id,
        agent?.status,
        setValue
    ]);

    const { data: userRoles, isSuccess } = useGetRolesQuery();
    const userRole = JSON.parse(watch('user_role') ? watch('user_role') : '[{ "name": "" }]');
    const [updateUser, { isLoading: updateUserLoading }] = useUpdateUserMutation();
    const [assignRole, { isLoading: assignRoleLoading }] = useAssignRoleMutation();
    const { data: userCredentials } = useGetUserCredentialsQuery(agent?.user_id);
    const [deleteTOTP] = useDestroyTOTPMutation();
    const credintial_id = getTotpId(userCredentials);

    const [getSingleAgent] = useGetSingleAgentMutation();
    const [assignPermission, { isLoading: APLoading }] = useAssignPermissionMutation();

    const handleUpdateAgent = async (data: any) => {
        const useInfo = agent?.agent_id
        let formData;
        if (data.password) {
            formData = {
                "enabled": true,
                "requiredActions": [TOTP ? "CONFIGURE_TOTP" : ''],
                "credentials": [{ "type": "password", "value": data.password, }],
                "attributes": { "status": [data.status] }
            }
        } else {
            formData = {
                "enabled": true,
                "requiredActions": [TOTP ? "CONFIGURE_TOTP" : ''],
                "attributes": { "status": [data.status] }
            }
        }
        await updateUser({
            user: formData,
            uuid: agent?.user_id
        });

        if (agent?.roles[0]?.idm_role_id === 'SUPER_ADMIN' || agent?.roles[0]?.idm_role_id === 'ANALYST') {
            await assignPermission({
                actions: mmsAction,
                entity_id: agent?.agent_id,
                entity_type: 'user',
                resource: 'mms'
            });

            await assignPermission({
                actions: smsAction,
                entity_id: agent?.agent_id,
                entity_type: 'user',
                resource: 'sms'
            });

        }

        await getSingleAgent(useInfo).unwrap()
            .then(async (response: any) => {

                if (!TOTP) {
                    await deleteTOTP({
                        user_uuid: response[0]?.id,
                        totp_id: credintial_id
                    });
                }

                await assignRole({
                    role: [JSON.parse(data.user_role)],
                    user_uuid: response[0].id,
                });

            });

        setSuccessMessage(' Agent Updated Successfully.');
        setTimeout(() => {
            dispatch(updateSection('HOME'));
        }, 2000)

    }


    const onUseGeneratedPassword = (value: string) => {
        setValue('password', value);
        setValue('confirm_password', value);
    }

    const validateConfirmPassword = (value: string) => {
        return watch('password') === value || "Password and confirm password mismatch";
    }

    return (
        <section className="agent-form col-lg-4 col-offset-4">
            <header>
                <div
                    onClick={() => dispatch(updateSection('HOME'))}
                    className='back action-link'>
                    <FontAwesomeIcon icon={faAngleLeft} />
                    Back
                </div>
            </header>
            <div>
                <h2>Edit Agent</h2>
                <hr />
            </div>
            <div
                className={`accordion default ${detailSection && 'is-open'}`}
                style={{ height: `${detailSection ? 'auto' : '50px'}` }}>
                <header onClick={() => setDetailSection(!detailSection)}>
                    <h5>Details</h5>
                    <FontAwesomeIcon
                        className="caret align-right"
                        icon={faCaretDown} />
                </header>
                <div className="accordion-body">
                    <div className="form-row">
                        <div className="form-field">
                            <label id="label-a-id" htmlFor="a-id" className="required">
                                Agent ID*
                                <ToolTip message="Three letters followed by 9 digit">
                                    <FontAwesomeIcon
                                        className="ml-8 color-white-faded "
                                        icon={faQuestionCircle} />
                                </ToolTip>
                            </label>
                            <input
                                name="agent_id"
                                type="text"
                                readOnly
                                {...register('agent_id')}
                            />
                        </div>
                        <div className="form-field flex"
                            style={{ paddingTop: "26px" }}>
                            <button
                                onClick={() => setResetPassword(!resetPassword)}
                                type="button"
                                className="action-link btn-x-small m0 p0">
                                {resetPassword ? 'Keep ' : 'Reset'} Password
                            </button>
                        </div>
                    </div>
                    {resetPassword && (
                        <div className="form-row flex two-up gutter password-rows">
                            <div style={{ flex: 1 }}>
                                <div className="form-row" >
                                    <div className="form-field grow password" >
                                        <label
                                            id="label-a-password"
                                            htmlFor="a-password"
                                            className="required flex">
                                            New &nbsp;
                                            {MFA && 'Temporary '}
                                            Password*
                                        </label>
                                        <input
                                            id="a-password"
                                            autoComplete="new-password"
                                            maxLength={64}
                                            name="password"
                                            type={viewPassword ? 'text' : 'password'}
                                            {...register("password", {
                                                pattern: {
                                                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?!.*(.)\1{11,})\S{12,}$/,
                                                    message: true
                                                },
                                            })}
                                            className={`password ${errors?.password ? 'border-red' : ''}`}
                                        />
                                        <i onClick={() => setViewPassword(!viewPassword)}>
                                            <FontAwesomeIcon
                                                className={"form-icon"}
                                                icon={viewPassword ? faEyeSlash : faEye}
                                            />
                                        </i>
                                        <div className="mt-1">
                                            <PasswordGenerator
                                                onUsePassword={onUseGeneratedPassword}
                                                minLength={12} maxLength={25}
                                                requiredUpperCase={false}
                                                requiredLowerCase={false}
                                                requiredNumber={false}
                                                requiredSymbole={false}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-field grow">
                                        <label
                                            id="label-a-confirm-password"
                                            htmlFor="a-confirm-password"
                                            className="required">
                                            Confirm New {MFA && 'Temporary '}  Password*
                                        </label>
                                        <input
                                            id="a-confirm-password"
                                            autoComplete="confirm-password"
                                            maxLength={64}
                                            name="confirm_password"
                                            type={viewPassword ? 'text' : 'password'}
                                            {...register("confirm_password", {
                                                validate: validateConfirmPassword,
                                            })}
                                            className={`password ${errors?.confirm_password ? 'border-red' : ''}`}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div className="form-field password-requirements">
                                    <small>
                                        - 12 character minimum<br />
                                        - one capital letter<br />
                                        - one special character<br />
                                        - one digit<br />
                                        - no extended repeating characters
                                    </small>
                                </div>
                            </div>
                        </div>

                    )}

                    <div className="form-row">
                        <div className="form-field">
                            <label>Multi-factor Authentication</label>
                            <div className="flex">
                                <div className="toggle">
                                    <input
                                        id="mfa"
                                        type="checkbox"
                                        value="true"
                                        checked={MFA}
                                        onChange={() => setMFA(!MFA)}
                                    />
                                    <label htmlFor="mfa"></label>
                                    <div className="knob"></div>
                                </div>
                                <small style={{ fontStyle: 'normal' }}>
                                    {MFA ? `Enabled ` : `Disabled`}
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-field">
                            <label>TOTP</label>
                            <div className="flex">
                                <div className="toggle">
                                    <input
                                        id="totp"
                                        type="checkbox"
                                        value="true"
                                        checked={TOTP}
                                        onChange={() => setTOTP(!TOTP)}
                                    />
                                    <label htmlFor="totp"></label>
                                    <div className="knob"></div>
                                </div>
                                <small style={{ fontStyle: 'normal' }}>
                                    {TOTP ? `Enabled ` : `Disabled`}
                                </small>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="form-row">
                        <div className="form-field">
                            <label id="label-a-role" htmlFor="a-role" className="required">
                                User Role*
                            </label>
                            {isSuccess &&
                                <AgentRoles
                                    register={register}
                                    error={errors?.user_role}
                                    userRoles={userRoles}
                                    selectedRole={agent?.roles[0]?.idm_role_id}
                                />}
                        </div>
                        <div className="form-field">
                            <label
                                id="label-a-status"
                                htmlFor="a-status"
                                className="required">
                                Status*
                            </label>
                            <select
                                name="status"
                                {...register("status", { required: true })}
                                className={`${errors?.status ? 'border-red' : ''}`}
                                id="a-status">
                                <option value="ACTIVE">Active</option>
                                <option value="PENDING">Pending</option>
                                <option value="INACTIVE">Inactive</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            {(userRole?.name === 'SUPER_ADMIN' ||
                userRole?.name === 'ANALYST') && (
                    <div
                        className={`accordion default ${permissionSection && 'is-open'}`}
                        style={{ height: `${permissionSection ? 'auto' : '50px'}` }}>
                        <header onClick={() => setPermissionSection(!permissionSection)}>
                            <h5>Permissions</h5>
                            <FontAwesomeIcon
                                className="caret align-right"
                                icon={faCaretDown} />
                        </header>
                        <div className="accordion-body permission-section">
                            <AgentPermissions
                                onSetMmsAction={setMmsAction}
                                onSetSmsAction={setSmsAction}
                            />
                        </div>
                    </div>
                )}
            <div className="form-footer flex text-right">
                <button
                    onClick={() => dispatch(updateSection('HOME'))}
                    id="cancel-phone-2"
                    className="action-link">
                    Cancel
                </button>
                <button
                    onClick={handleSubmit(handleUpdateAgent)}
                    id="save-phone"
                    type="button"
                    className="mc-btn btn-green btn-save">
                    <ButtonLoaders text="Save Changes" loading={updateUserLoading || assignRoleLoading || APLoading} />
                </button>
            </div>
            <div>
                <SuccessMessage message={successMessage} />
            </div>
        </section>
    );
}

export default EditAgent;