
export const aarData = {
    sections: [
        {
            order: 0,
            section_name: "Mission Details",
            fields: [
                {
                    id: "aar_mission_details",
                    order: 0,
                    required: true,
                    type: "paragraph",
                    label: "What is the purpose or goal of this session??",
                    hasSubtext: false,
                    subtext: "",
                    isBoolean: false,
                    choices: [

                    ]
                }
            ]
        },
        {
            order: 1,
            section_name: "Actions",
            fields: [
                {
                    id: "aar_actions",
                    order: 0,
                    required: true,
                    label: "What actions were performed?",
                    hasSubtext: true,
                    subtext: "Submit action records throughout session"
                }
            ]
        },
        {
            order: 2,
            section_name: "Files & Media"
        },
        {
            order: 3,
            section_name: "Additional Questions",
            fields: [
                {
                    id: "aar_questions_files_downloaded",
                    label: "Any files downloaded or uploaded?",
                    subText: "",
                    hasSubText: false,
                    hasComments: true,
                    firstResponse: 'Yes',
                    secondResponse: 'No',
                    editMode: false,
                    required: true,
                    order: 0,
                    type: "radio",
                    isBoolean: false,
                    choices: [
                        {
                            "value": true,
                            "label": "Yes"
                        },
                        {
                            "value": false,
                            "label": "No"
                        }
                    ]
                },
                {
                    id: "aar_questions_social_media",
                    label: "Any Social media interactions?",
                    subText: "e.g. friend requests, connections, likes, tweets, etc.",
                    hasSubText: true,
                    hasComments: true,
                    firstResponse: 'Yes',
                    secondResponse: 'No',
                    editMode: false,
                    required: true,
                    order: 1,
                    type: "radio",
                    isBoolean: false,
                    choices: [
                        {
                            "value": true,
                            "label": "Yes"
                        },
                        {
                            "value": false,
                            "label": "No"
                        }
                    ]
                },
                {
                    id: "aar_questions_phone_2fa",
                    label: "Was phone number used for two-factor authentication?",
                    subText: "",
                    hasSubText: false,
                    hasComments: true,
                    firstResponse: 'Yes',
                    secondResponse: 'No',
                    editMode: false,
                    required: true,
                    order: 2,
                    type: "radio",
                    isBoolean: false,
                    choices: [
                        {
                            "value": true,
                            "label": "Yes"
                        },
                        {
                            "value": false,
                            "label": "No"
                        }
                    ]
                },
                {
                    id: "aar_questions_email_2fa",
                    label: "Was phone number used for two-factor authentication?",
                    subText: "",
                    hasSubText: false,
                    hasComments: true,
                    firstResponse: 'Yes',
                    secondResponse: 'No',
                    editMode: false,
                    required: true,
                    order: 3,
                    type: "radio",
                    isBoolean: false,
                    choices: [
                        {
                            "value": true,
                            "label": "Yes"
                        },
                        {
                            "value": false,
                            "label": "No"
                        }
                    ]
                },
                {
                    id: "aar_questions_deviated",
                    label: "Did you deviate from planned session activities?",
                    subText: "",
                    hasSubText: false,
                    hasComments: true,
                    firstResponse: 'Yes',
                    secondResponse: 'No',
                    editMode: false,
                    required: true,
                    order: 4,
                    type: "radio",
                    isBoolean: false,
                    choices: [
                        {
                            "value": true,
                            "label": "Yes"
                        },
                        {
                            "value": false,
                            "label": "No"
                        }
                    ]
                },
                {
                    id: "aar_questions_issues_concerns",
                    label: "Any other issues or concerns to report?",
                    subText: "",
                    hasSubText: false,
                    hasComments: false,
                    required: false,
                    order: 5,
                    type: "paragraph",
                    isBoolean: false,
                    choices: []
                }
            ]
        }
    ],
    schema_updated_at: "2023-03-05T16:48:19.870218"
}
