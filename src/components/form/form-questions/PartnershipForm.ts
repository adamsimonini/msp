export const partnershipQuestions =
[
    {
        stepName: 'Partnership form',
        step: '1',
        questions: [
            {
                name: "partnerName",
                fieldType: "TextInput",
                label: "partnerName",
                placeholder: "partnershipExample",
                errors: {
                    required: "Partner name is required",
                },
            },
            {
                name: "financialContribution",
                fieldType: "NumberControl",
                label: "financialContribution",
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
                label: "industrySector",
                placeholder: "",
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
                label: "interventionsSupported",
                color: "#FB9D26",
                errors: {
                    required: "Pick at least one",
                },
                options: ["sedentaryLifestyle", "smoking", "unhealthyEating"],
            },
            {
                name: "likelihood",
                fieldType: "SliderControl",
                label: "Stage of securing funding",
                color: "#FB9D26",
                errors: {
                    required: "",
                },
                tickLabels: ['Not started', 'Started', 'Deliberation', 'Letter of intent', 'Funding secured'],
                vertical: true,
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

export const questionSetOne =
    [
        {
            stepName: 'Official Ontario Pony Ownership Form',
            step: '1',
            questions: [
                {
                    name: "happyPony",
                    fieldType: "SwitchControl",
                    label: "Is this form dynamic? ",
                },
                {
                    name: "ponyName",
                    fieldType: "TextInput",
                    placeholder: "",
                    label: "Name",
                    errors: {
                        required: "Name is required",
                    },
                },
                {
                    name: "ponyAge",
                    fieldType: "NumberControl",
                    label: "Pony Age",
                    errors: {
                        required: "The age of your pony is required",
                        counter: {
                            maxValue: 99,
                            message: "Horses don't live to be 100, yet!",
                        },
                    },
                },
                {
                    name: "ponyBreed",
                    fieldType: "SelectList",
                    multi: false,
                    label: "Breed",
                    errors: {
                        required: "The breed of your pony is required",
                    },
                    options: [
                        "Augeron", "Belgian Warmblood", "Cerbat Mustang", "Clydesdale horse",
                        "Java Pony", "Miyako Pony", "Newfoundland pony", "Spanish Mustang", "Welsh Pony",
                    ],
                },
                {
                    name: "ponyPower",
                    fieldType: "TextInput",
                    placeholder: "",
                    label: "Pony Power (i.e., Horse Power)",
                    errors: {
                        required: "Pony power is required",
                    },
                },
                {
                    name: "ponyMagic",
                    fieldType: "SelectList",
                    placeholder: "",
                    label: "Magical Ability",
                    errors: {
                        required: "Magical ability is required",
                    },
                    options: [
                        "Invisilbity", "Shooting Rainbow Light Beams", "Flying",
                        "Super-Horse Strength", "Superior Intellect", "Ultrasonic Speed", "Invincibility",
                    ],
                },
                {
                    name: "ponyFood",
                    fieldType: "CheckboxControl",
                    label: "Food Restrictions",
                    color: "#FB9D26",
                    errors: {
                        required: "Pick at least one",
                    },
                    options: ["Vegetarian", "Halal", "Vegan", "Gluten Free", "No Sugar"],
                },
                {
                    name: "ponyFootwear",
                    fieldType: "RadioControl",
                    label: "Pony Footwear",
                    color: "#FB9D26",
                    errors: {
                        required: "Must choose one option",
                    },
                    options: ["Plastic", "Metal", "None"],
                    column: true,
                },
                {
                    name: "temperment",
                    fieldType: "SliderControl",
                    label: "Temperment",
                    color: "#FB9D26",
                    errors: {
                        required: "",
                    },
                    options: ["Plastic", "Metal", "None"],
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
                {
                    name: "firstName",
                    fieldType: "TextInput",
                    placeholder: "First Name",
                    label: "First Name",
                    errors: {
                        required: "Name is required",
                    },
                },
                {
                    name: "lastName",
                    fieldType: "TextInput",
                    placeholder: "Last Name",
                    label: "Last Name:",
                    errors: {
                        required: "Last name is required",
                    },
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