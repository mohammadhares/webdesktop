export type FilterItem = {
    isChecked: boolean
}

export type AgentProps = {
    data: any
    success: boolean
    loading: boolean
    error: boolean
    filterLoading: boolean
}


export type AgentPermissionProps = {
    onSetMmsAction(value: Array<string>): void
    onSetSmsAction(value: Array<string>): void
}

export type RoleNameMap = {
    SUPER_ADMIN: string;
    SYSTEM: string;
    ANALYST: string;
    AUDITOR: string;
    TPD_HIGH: string;
    TPD_LOW: string;
    ARTIST: string;
    ARTIST_MANAGER: string;
};


export const convertToLowerCase = (item : string) => {
    return `${item}`.toString().toLowerCase()
}

