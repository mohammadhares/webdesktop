// NOSONAR
const eventMap : any = {
    DAM_FILE_UPLOAD: {
        description: 'uploaded a file for',
        icon: 'file',
        color: 'green',
        persona: true,
    },
    PVD_SESSION_START: {
        description: 'started PVD session with',
        icon: 'desktop',
        color: 'blue',
    },
    PVD_SESSION_STOP: {
        description: 'ended PVD session with',
        icon: 'desktop',
        color: 'blue',
    },
    PERSONA_CHECKED_IN: {
        description: 'checked in',
        icon: 'sign-in',
        color: 'red',
    },
    PERSONA_ACTIVATED: {
        description: 'activated persona',
        icon: 'user-plus',
        color: 'green',
    },
    LOGIN_FAILURE_PWD: {
        description: 'login failed with invalid password',
        icon: 'exclamation',
        color: 'red',
    },
    FACEGEN_CREDENTIALS_CHANGED: {
        description: 'updated FaceGen settings',
        icon: 'cog',
        color: 'purple',
    },
    LOGIN_FAILURE_USER_LOCKED: {
        description: 'attempted login with locked account',
        icon: 'exclamation',
        color: 'red',
    },
    TIR_PERSONA_PHONE_NUMBER_CREATED: {
        description: `assigned tirade number  to`,
        icon: 'phone',
        color: 'green',
        persona: true,
    },
    TIR_PERSONA_PHONE_NUMBER_DELETED: {
        description: `unassigned tirade number from`,
        icon: 'phone',
        color: 'red',
        persona: true,
    },
    MANUAL_LOGOUT: {
        description: 'logged out',
        icon: 'door-closed',
        color: 'blue',
    },
    LOGIN_AUTHORIZED: {
        description: 'logged in',
        icon: 'door-open',
        color: 'blue',
    },
    LOGIN_FAILURE_USERID: {
        description: `Failed login attempt with username '}'`,
        icon: 'exclamation',
        color: 'red',
    },
    ACCOUNT_UNLOCKED: {
        description: `unlocked account`,
        icon: 'unlock',
        color: 'blue',
    },
    ACCOUNT_LOCKED: {
        description: 'account locked',
        icon: 'lock',
        color: 'red',
    },
    PERSONA_CHECKED_OUT: {
        description: 'checked out',
        icon: 'sign-out',
        color: 'green',
    },
    TPD_SEARCH: {
        description: `ran a TPD search for`,
        icon: 'search',
        color: 'blue',
    },
    AGENT_STATUS_CHANGED: {
        icon: 'user',
        color: 'orange',
    },
    AAR_APPROVED: {
        description: 'AAR approved for',
        icon: 'clipboard',
        color: 'blue',
    },
    TIR_CONVERSATION_STARTED: {
        description: `initiated conversation with using`,
        icon: 'comments',
        color: 'green',
        persona: true,
    },
    FACEGEN_CREDENTIALS_CHANGE_FAILED: {
        description: 'failure updating FaceGen settings',
        icon: 'exclamation',
        color: 'red',
    },
    HTTP_LOG: {
        description: ' did browse ',
        icon: 'globe',
        color: 'blue',
    },
    DAM_FILE_VIEW: {
        description: ' viewed file ',
        icon: 'globe',
        color: 'blue',
    },
    TIR_PERMISSION_GRANTED: {
        description: ' set permission for phone number ',
        icon: 'phone',
        color: 'green',
    },
    TIR_MESSAGE_RECEIVED: {
        description: ' received message ',
        icon: 'comments',
        color: 'orange',
        persona: true,
    }
}

const entityMap : any = {
    virtualmachine: {
        icon: 'cog',
        color: 'purple',
    },
    personaaliases: {
        icon: 'signature',
    },
    schedule: {
        icon: 'clock-o',
    },
}

const activityType = 'default'

const actions :any = {
    CREATE: 'created',
    UPDATE: 'updated',
    DELETE: 'deleted',
}

const models : any = {
    personaemails: {
        label: 'email',
        determiner: 'an',
        target: 'persona',
    },
    email: {
        label: 'email',
        determiner: 'an',
        target: 'persona',
    },
    personapiercings: {
        label: 'piercing',
        determiner: 'a',
        target: 'persona',
    },
    personaaddresses: {
        label: 'address',
        determiner: 'an',
        target: 'persona',
    },
    address: {
        label: 'address',
        determiner: 'an',
        target: 'persona',
    },
    alias: {
        label: 'alias',
        determiner: 'an',
    },
    acquisitionpersonanotes: {
        label: 'acquisition note',
        determiner: 'an',
        target: '',
    },
    personabankaccounts: {
        label: 'bank account',
        determiner: 'a',
        target: 'persona',
    },
    bankaccount: {
        label: 'bank account',
        determiner: 'a',
        target: 'persona',
    },
    browser: {
        label: 'browser',
        determiner: 'a',
        target: 'persona',
    },
    campaign: {
        label: 'campaign',
        determiner: 'a',
        target: 'campaign',
    },
    team: {
        label: 'team',
        determiner: 'a',
        target: 'team',
    },
    digitalsignature: {
        label: 'digital signature',
        determiner: 'a',
        // target: 'persona',
    },
    personaemployments: {
        label: 'employment',
        determiner: 'an',
        target: 'persona',
    },
    employment: {
        label: 'employment',
        determiner: 'an',
        target: 'persona',
    },
    employer: {
        label: 'employer',
        determiner: 'an',
        target: '',
    },
    ip: {
        label: 'IP address',
        determiner: 'an',
        // target: 'persona',
    },
    personalanguages: {
        label: 'language',
        determiner: 'a',
        target: 'persona',
    },
    language: {
        label: 'language',
        determiner: 'a',
        target: 'persona',
    },
    personamedias: {
        label: 'media',
        determiner: 'a',
        target: 'persona',
    },
    media: {
        label: 'media',
        determiner: 'a',
        target: 'persona',
    },
    mission: {
        label: 'mission',
        determiner: 'a',
    },
    personanotes: {
        label: 'note',
        determiner: 'a',
        target: 'persona',
    },
    note: {
        label: 'note',
        determiner: 'a',
        target: 'persona',
    },
    os: {
        label: 'OS',
        determiner: 'an',
        // target: 'persona',
    },
    personapaymentcards: {
        label: 'payment card',
        determiner: 'a',
        target: 'persona',
    },
    paymentcard: {
        label: 'payment card',
        determiner: 'a',
        target: 'persona',
    },
    personapets: {
        label: 'pet',
        determiner: 'a',
        target: 'persona',
    },
    pet: {
        label: 'pet',
        determiner: 'a',
        target: 'persona',
    },
    persona: {
        weight: {
            label: 'weight',
            determiner: 'the',
            target: 'persona',
        },
        height: {
            label: 'height',
            determiner: 'the',
            target: 'persona',
        },
        deleted_at: {
            label: '',
            determiner: 'draft persona',
            target: 'persona',
        },
        background_narrative: {
            label: 'background narrative',
            determiner: '',
            target: 'persona',
        },
        eye_color: {
            label: 'eye color',
            determiner: '',
            target: 'persona',
        },
        eyeglasses: {
            label: 'eyeglasses',
            determiner: '',
            target: 'persona',
        },
        hair_color: {
            label: 'hair color',
            determiner: '',
            target: 'persona',
        },
        build: {
            label: 'build',
            determiner: '',
            target: 'persona',
        },
        facial_hair: {
            label: 'facial hair',
            determiner: '',
            target: 'persona',
        },
        birth_city: {
            label: 'birth city',
            determiner: 'a',
            target: 'persona',
        },
        birth_country: {
            label: 'birth country',
            determiner: 'a',
            target: 'persona',
        },
        dob: {
            label: 'date of birth',
            determiner: 'a',
            target: 'persona',
        },
        digital_signature_id: {
            label: 'digital signature',
            determiner: 'a',
            target: 'persona',
        },
        sleep_schedule_id: {
            label: 'sleep schedule for',
            determiner: '',
            target: 'persona',
        },
        created_at: {
            label: 'persona',
            determiner: 'a',
            target: 'persona',
        },
        checked_in_at: {
            label: 'checked in',
            determiner: '',
            target: 'persona',
        },
        checked_in_by_id: {
            label: 'checked in',
            determiner: '',
            target: 'persona',
        },
        checked_out_at: {
            label: 'checked out',
            determiner: '',
            target: 'persona',
        },
        checked_out_by_id: {
            label: 'checked out',
            determiner: '',
            target: 'persona',
        },
        status: {
            label: 'status',
            determiner: 'the',
            target: 'persona',
        },
        first_name: {
            label: 'first name',
            determiner: 'the',
            target: 'persona',
        },
        last_name: {
            label: 'first name',
            determiner: 'the',
            target: 'persona',
        },
        updated_at: {
            label: 'persona',
            determiner: '',
            target: 'persona',
        },
        relationship_status: {
            label: 'relationship status',
            determiner: '',
            target: 'persona',
        },
        target: 'persona',
    },
    weight: {
        label: 'weight',
        determiner: 'the',
        target: 'persona',
    },
    height: {
        label: 'height',
        determiner: 'the',
        target: 'persona',
    },
    deleted_at: {
        label: '',
        determiner: 'draft persona',
        target: 'persona',
    },
    background_narrative: {
        label: 'background narrative',
        determiner: '',
        target: 'persona',
    },
    eye_color: {
        label: 'eye color',
        determiner: '',
        target: 'persona',
    },
    eyeglasses: {
        label: 'eyeglasses',
        determiner: '',
        target: 'persona',
    },
    hair_color: {
        label: 'hair color',
        determiner: '',
        target: 'persona',
    },
    build: {
        label: 'build',
        determiner: '',
        target: 'persona',
    },
    facial_hair: {
        label: 'facial hair',
        determiner: '',
        target: 'persona',
    },
    birth_city: {
        label: 'birth city',
        determiner: 'a',
        target: 'persona',
    },
    birth_country: {
        label: 'birth country',
        determiner: 'a',
        target: 'persona',
    },
    dob: {
        label: 'date of birth',
        determiner: 'a',
        target: 'persona',
    },
    digital_signature_id: {
        label: 'digital signature',
        determiner: 'a',
        target: 'persona',
    },
    sleep_schedule_id: {
        label: 'sleep schedule',
        determiner: 'a',
        target: 'persona',
    },
    created_at: {
        label: 'persona',
        determiner: 'a',
        target: 'persona',
    },
    checked_in_at: {
        label: 'checked in',
        determiner: '',
        target: 'persona',
    },
    checked_in_by_id: {
        label: 'checked in',
        determiner: '',
        target: 'persona',
    },
    checked_out_at: {
        label: 'checked out',
        determiner: '',
        target: 'persona',
    },
    checked_out_by_id: {
        label: 'checked out',
        determiner: '',
        target: 'persona',
    },
    status: {
        label: 'status',
        determiner: 'the',
        target: 'persona',
    },
    first_name: {
        label: 'first name',
        determiner: 'the',
        target: 'persona',
    },
    last_name: {
        label: 'first name',
        determiner: 'the',
        target: 'persona',
    },
    updated_at: {
        label: 'persona',
        determiner: '',
        target: 'persona',
    },
    relationship_status: {
        label: 'relationship status',
        determiner: '',
        target: 'persona',
    },
    personasession: {
        label: 'session',
        determiner: 'a',
        target: 'persona',
    },
    personaaliases: {
        label: 'alias',
        determiner: 'an',
        target: 'persona',
    },
    personasessionevent: {
        label: 'session',
        determiner: 'a',
        target: 'persona',
    },
    personauser: {
        label: 'personauser',
        determiner: 'a',
        target: 'persona',
    },
    uploadedartifact: {
        label: 'artifact',
        determiner: 'an',
        target: 'persona',
    },
    phone: {
        label: 'phone number',
        determiner: 'a',
        target: 'persona',
    },
    personaphonesignatures: {
        label: 'phone signature',
        determiner: 'a',
        target: 'persona',
    },
    phonesignature: {
        label: 'phone signature',
        determiner: 'a',
        target: 'persona',
    },
    plan: {
        label: 'plan',
        determiner: 'a',
    },
    annex: {
        label: 'annex',
        determiner: 'an',
    },
    report: {
        label: 'report',
        determiner: 'a',
        target: 'persona',
    },
    personareports: {
        label: 'AAR',
        determiner: 'an',
        target: 'persona',
    },
    schedule: {
        label: 'schedule',
        determiner: 'a',
        // target: 'persona',
    },
    simcard: {
        label: 'SIM card',
        determiner: 'a',
    },
    simminute: {
        label: 'minute balance',
        determiner: 'a',
    },
    simtext: {
        label: 'text message balance',
        determiner: 'a',
    },
    simdata: {
        label: 'data balance',
        determiner: 'a',
    },
    personasocialmedias: {
        label: 'social media account',
        determiner: 'a',
        target: 'persona',
    },
    socialmedia: {
        label: 'social media account',
        determiner: 'a',
        target: 'persona',
    },
    user: {
        label: 'user',
        determiner: 'a',
    },
    transaction: {
        label: 'transaction',
        determiner: 'a',
    },
}



const badgeColor = (activity: any) => {
    // Entity map
    if (activity?.event_type !== null && activity?.event_details?.entity_name !== null && entityMap !== null) {
        if (activity?.event_type === 'ENTITY_UPDATED' && activity?.event_details?.entity_name in entityMap) {
            if ('color' in entityMap[activity?.event_details?.entity_name]) {
                return entityMap[activity?.event_details?.entity_name]?.color;
            }
        }
    }


    // Event map
    if (activity?.event_type && eventMap) {
        if (activity?.event_type && activity?.event_type in eventMap) {
            return eventMap[activity?.event_type]?.color;
        }
    }

    // Red
    if (activity?.event_type && activity?.event_type === 'ENTITY_DELETED') {
        return 'red';
    }

    // Green
    if (activity?.event_type && activity?.event_type === 'ENTITY_CREATED') {
        return 'green';
    }

    // Orange
    if (activity?.event_type && activity?.event_type === 'ENTITY_UPDATED') {
        return 'orange';
    }

    return '';
}


const icons : any = {
    persona: {
        deleted_at: 'trash',
        birth_city: 'globe',
        birth_country: 'globe',
        checked_in_at: 'sign-in',
        checked_in_by_id: 'sign-in',
        checked_out_at: 'sign-out',
        checked_out_by_id: 'sign-out',
        created_at: 'user',
        digital_signature_id: 'desktop',
        dob: 'user',
        first_name: 'user',
        last_name: 'user',
        status: 'user',
        facial_hair: 'user',
        build: 'walking',
        eye_color: 'eye',
        eyeglasses: 'eye',
        weight: 'weight',
        height: 'ruler-vertical',
        hair_color: 'fill-drip',
        background_narrative: 'folder-open',
    },
    approved_by_user_id: 'file',
    relationship_status: 'user-friends',
    sleep_schedule_id: 'moon',
    personaemployments: 'briefcase',
    personapiercings: 'ring',
    personasession: 'sign-out',
    personasessionevent: 'desktop',
    personaaddresses: 'home',
    address: 'home',
    annex: 'folder-open',
    personabankaccounts: 'dollar-sign',
    bankaccount: 'dollar-sign',
    browser: 'desktop',
    campaign: 'folder-open',
    digitalsignature: 'desktop',
    personaemails: 'envelope',
    email: 'envelope',
    employment: 'briefcase',
    employer: 'briefcase',
    ip: 'desktop',
    personalanguages: 'globe',
    languages: 'globe',
    personamedias: 'image',
    media: 'image',
    mission: 'folder-open',
    os: 'desktop',
    personapaymentcards: 'credit-card',
    personapets: 'paw',
    pet: 'paw',
    phone: 'phone',
    personaphonesignatures: 'mobile-alt',
    phonesignature: 'mobile-alt',
    plan: 'folder-open',
    report: 'file',
    personareports: 'file',
    schedule: 'clock-o',
    session: 'phone',
    simcard: 'mobile-alt',
    simminute: 'mobile-alt',
    simtext: 'mobile-alt',
    simdata: 'mobile-alt',
    acquisitionnote: 'sticky-note',
    note: 'sticky-note',
    personanotes: 'sticky-note',
    personasocialmedias: 'share-alt',
    socialmedia: 'share-alt',
    team: 'folder-open',
    transaction: 'credit-card',
    user: 'user',
    userrole: 'user',
}

const getIconFromEventMap = (event: { event_type: string }, eventMaps : any) => {
    if (event?.event_type && event?.event_type in eventMaps) {
      return eventMaps[event?.event_type]?.icon;
    }
    return null;
  };
  
  const getIconForSpecialCases = (event: { event_details: { entity_name: string } }) => {
    if (event?.event_details?.entity_name === 'aar') return 'clipboard';
    if (event?.event_details?.entity_name === 'persona') return 'user';
    return null;
  };
  
  const getIconForUpdatedAssignment = (event: { event_details: { new_data: any } }) => {
    if (
      event?.event_details?.new_data &&
      ('team_id' in event?.event_details.new_data)
    ) {
      return 'folder-open';
    }
    return null;
  };
  
  const getIconFromIcons = (event : any, icon : any) => {
    const changedProperty =
      event?.event_details?.new_data && Object.keys(event?.event_details.new_data)[0];
  
    if (icon[changedProperty]) {
      return icon[changedProperty];
    }
    return null;
  };
  
  const getIconFromEventDetailsEntityName = (event : any, icon : any) => {
    if (icon[event?.event_details?.entity_name]) {
      return icon[event?.event_details?.entity_name];
    }
    return null;
  };
  
  const activityIcons = (activity : any) => {
    if (activity) {
      if (activity.event_type === 'ENTITY_DELETED' || activity.event_type === 'ENTITY_UPDATED') {
        const specialCaseIcon = getIconForSpecialCases(activity);
        if (specialCaseIcon) return specialCaseIcon;
      }
  
      if (activity.event_type === 'HTTP_LOG') {
        return `did browse ${activity.event_details?.domain}`;
      }
  
      if (activity.event_type === 'DAM_FILE_VIEW') {
        return `viewed ${activity.event_details?.event_details?.filename} for`;
      }
  
      if (eventMap) {
        const eventIcon = getIconFromEventMap(activity, eventMap);
        if (eventIcon) return eventIcon;
      }
    }
  
    if (activity) {
      if (activity.event_details) {
        if (activity.event_details.new_data) {
          const updatedAssignmentIcon = getIconForUpdatedAssignment(activity);
          if (updatedAssignmentIcon) return updatedAssignmentIcon;
  
          const genericIcon = getIconFromIcons(activity, icons);
          if (genericIcon) return genericIcon;
        }
  
        const entityNameIcon = getIconFromEventDetailsEntityName(activity, icons);
        if (entityNameIcon) return entityNameIcon;
      }
    }
  
    return 'question';
  };
  
  const theVerb = (activity : any) => {
    if (!activity || activity.event_type !== 'ENTITY_UPDATED') {
      return '';
    }
  
    const oldData = Object.keys(activity.event_details?.old_data)[0];
    const newData = Object.keys(activity.event_details?.new_data)[0];
  
    if (oldData && !newData) {
      return 'deleted';
    }
  
    if (!oldData && newData) {
      return 'added';
    }
  
    return 'updated';
  };
  
  const uniqueDescription = (activity: any) => {
    if (
      activity?.event_type === 'AGENT_STATUS_CHANGED' &&
      activity?.event_details?.old_data?.status
    ) {
      return `changed an agent's status from ${activity?.event_details?.old_data?.status?.toLowerCase()} to ${activity?.event_details?.new_data?.status?.toLowerCase()}`;
    }
  
    return '';
  };
  
  const description = (activity: { event_type: string; event_details: { domain: any; event_details: { filename: any }; old_data: {}; entity_name: string; new_data: { name: any }; modified_column: string; modified_table: string; activity_type: string } }) => {
    if (activity) {
      if (activity.event_type === 'HTTP_LOG') {
        return `did browse ${activity.event_details?.domain}`;
      }
  
      if (activity.event_type === 'DAM_FILE_VIEW') {
        return `viewed ${activity.event_details?.event_details?.filename} for`;
      }
    }
  
    if (eventMap && activity?.event_type in eventMap) {
      return (
        eventMap[activity.event_type]?.description || uniqueDescription(activity?.event_type)
      );
    }
  
    if (activity?.event_type === 'ENTITY_UPDATED') {
      let property = Object.keys(activity?.event_details?.old_data)[0] || '';
      if (activity?.event_details?.entity_name === 'virtualmachine') {
        return 'saved PVD settings for';
      }
  
      if (!models[property]) {
        property = activity?.event_details?.entity_name;
      }
  
      if (activity?.event_details?.entity_name === 'team') {
        return `${theVerb(activity)} team ${activity?.event_details?.new_data.name}`;
      }
  
      if (activity?.event_details?.new_data && 'team_id' in activity?.event_details.new_data) {
        return `${theVerb(activity)} assignment for`;
      }
  
      return `${theVerb(activity)} ${models[property]?.determiner} ${models[property]?.label} for`;
    }
  
    if (activity?.event_type === 'ENTITY_CREATED') {
      const property = activity?.event_details?.entity_name;
  
      if (property === 'aar') {
        return 'created AAR for';
      }
  
      return `created ${models[property]?.determiner} ${models[property]?.label} for`;
    }
  
    if (activity?.event_type === 'ENTITY_DELETED') {
      const property = activity?.event_details?.entity_name;
  
      if (property === 'persona') {
        return 'deleted persona';
      }
  
      if (property === 'aar') {
        return 'deleted AAR for';
      }
  
      return `deleted ${models[property]?.determiner} ${models[property]?.label} for`;
    }
  
    if (activity?.event_type === 'REGISTRY_CHANGED' && activity?.event_details?.modified_column === 'team_id') {
      return 'updated team assignment for';
    }
  
    if (activity?.event_details?.modified_table === 'userrole') {
      return 'changed a user\'s role';
    }
  
    let action = actions[activity?.event_details?.activity_type];
    const model = models[activity?.event_details?.modified_table];
  
    if (activity?.event_details?.modified_table === 'personalanguages' && action === 'created') {
      action = 'added';
    }
  
    if (activity?.event_details?.modified_table === 'personareports' && activity?.event_details?.activity_type === 'CREATE') {
      action = 'submitted';
    }
  
    if (activity?.event_details?.modified_table === 'personareports' && activity?.event_details?.activity_type === 'UPDATE') {
      action = 'approved';
    }
  
    if (model) {
      return `${action} ${model?.determiner} ${model?.label}`;
    }
  
    return `${action} an UNKNOWN object ${activity?.event_details?.modified_table}`;
  };
  
  const tiradeMesDescription = (event: { event_type: string; event_details: { body: any; source_number: any; target_phone_number: any; url: any; source_phone_number: any; action: any } }) => {
    if (event) {
      if (event.event_type === 'TIR_MESSAGE_RECEIVED') {
        return ` "${event?.event_details?.body}" from ${event?.event_details?.source_number} `;
      }
  
      if (event.event_type === 'TIR_MESSAGE_SENT') {
        return ` "${event?.event_details?.body}" sent to ${event?.event_details?.target_phone_number} `;
      }
  
      if (event.event_type === 'TIR_CREDENTIALS_CHANGED') {
        return ` ${event?.event_details?.url} Credential Changed `;
      }
  
      if (event.event_type === 'TIR_CONVERSATION_STARTED') {
        return `Conversation Started between ${event?.event_details?.source_phone_number} & ${event?.event_details?.target_phone_number} `;
      }
  
      if (event.event_type === 'TIR_PERMISSION_GRANTED') {
        return ` ${event?.event_details?.action} Permission Granted to `;
      }
    }
  
    return '';
  };
  
  export {
    eventMap,
    entityMap,
    models,
    actions,
    activityType,
    badgeColor,
    activityIcons,
    description,
    tiradeMesDescription,
  };
  