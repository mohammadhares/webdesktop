import { RoleNameMap } from "./AgentTypes";

export const agentsRole = (role: string) => {
    if (role === "Super Admin") return "SRB";
    else return role;
}

export const renderCheckoutPersona = (item : any) => {
    if (Object.keys(item?.checked_out_persona).length) {
        return {
            name: item?.checked_out_persona?.first_name + ' ' + item?.checked_out_persona?.last_name,
            id: item?.checked_out_persona?.persona_identifier
        }
    } else {
        return {
            name: '',
            id: '',
        };
    }
}

export const mapAssignment = (assignment: any, type: any) => {
    return {
        name: assignment?.name,
        type,
        id: assignment?.id,
    };
}

export const renderTeams = (team : any) => {
    if (team && !team.dummy) {
        return mapAssignment(team, 'team');
    }

    return {
        name: 'Unassigned',
        type: 'unassigned',
        id: '',
    };
}


export const convertRoleName = (role: keyof RoleNameMap): string => {
    const roleNames: RoleNameMap = {
        SUPER_ADMIN: 'SRB',
        SYSTEM: 'System',
        ANALYST: 'Analyst',
        AUDITOR: 'Auditor',
        TPD_HIGH: 'Deconfliction (HighSec)',
        TPD_LOW: 'Deconfliction (LowSec)',
        ARTIST: 'Artist',
        ARTIST_MANAGER: 'Artist Manager',
    };

    return roleNames[role] || role;
};

export const getRoleName = (role : string) => {
    const roleName: any = {
        SUPER_ADMIN: 'SRB',
        SYSTEM: 'System',
        ANALYST: 'Analyst',
        AUDITOR: 'Auditor',
        TPD_HIGH: 'Deconfliction (HighSec)',
        TPD_LOW: 'Deconfliction (LowSec)',
        ARTIST: 'Artist',
        ARTIST_MANAGER: 'Artist Manager',
    };

    return roleName[role] || role;
}

export const getTotpId = (list: any) => {
    let totp = null;
    list?.forEach((item: any) => {
        if (item?.type === "otp") {
            totp = item.id;
        }
    });
    return totp;
}