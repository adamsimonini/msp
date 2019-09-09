export const partnershipQuestions =
[
    {
        stepName: 'Partnership form',
        step: '1',
        questions: [
            {
                name: "partnerName",
                fieldType: "TextInput",
                placeholder: "",
                label: "Name of partner organization",
                errors: {
                    required: "Partner name is required",
                },
            },
            {
                name: "financialContribution",
                fieldType: "NumberControl",
                label: "Financial contribution",
                errors: {
                    required: "An amount is required",
                    counter: {
                        maxValue: 1000000000,
                        message: "Are you sure it's THAT much?",
                    },
                },
            },
            {
                name: "sector",
                fieldType: "SelectList",
                placeholder: "",
                label: "Partner's industry sector",
                errors: {
                    required: "Partner's industry is required",
                },
                options: [
                    "Corporate", "Not-for-profit", "Other",
                ],
            },
            {
                name: "interventionType",
                fieldType: "CheckboxControl",
                label: "Intervention(s) supported",
                color: "#FB9D26",
                errors: {
                    required: "Pick at least one",
                },
                options: ["Seditary lifestyle", "Smoking", "Unhealthy eating"],
            },
            {
                name: "likelihood",
                fieldType: "SliderControl",
                label: "Stage of securing funding",
                color: "#FB9D26",
                errors: {
                    required: "",
                },
            },
        ],
    },
    {
        stepName: 'Personal Info',
        step: '2',
        questions: [
            {
                name: "title",
                fieldType: "SelectList",
                multi: false,
                label: "Title: ",
                errors: {
                    required: "Name is required",
                },
                options: ["Ms", "Mr", "Mx", "Dr", "Madam", "Lord"],
            },
        ],
    },
    {
        stepName: 'Company Info',
        step: '3',
        questions: [
            {
                fieldType: "SelectList",
                name: "title",
                multi: false,
                label: "Title: ",
                errors: {
                    required: "You must select one.",
                },
                options: ["Ms", "Mr", "Mx", "Dr", "Madam", "Lord"],
            },
        ],
    },
];