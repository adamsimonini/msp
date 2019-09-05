export const questionSetOne =
    [
        {
            stepName: 'Official Ontario Pony Ownership Form',
            step: '1',
            questions: [
                {
                    name: "happyPony",
                    fieldType: "SwitchControl",
                    label: "Is actually a pony: ",
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
                    options: ["Ms", "Mr", "Mx", "Dr", "Madam", "Lord"],
                },
            ],
        },
    ];

export const questionSetTwo =
    [
        {
            fieldType: "TextInput",
            placeholder: "First Name",
            label: "First Name",
            name: "firstName",
            errors: {
                required: "Name is required",
            },
        },
        {
            fieldType: "TextInput",
            placeholder: "Last Name",
            label: "Last Name",
            name: "lastName",
            errors: {
                required: "Name is required",
            },
        },
        // {
        //     fieldType: "NumberInput",
        //     placeholder: "Age",
        //     name: "age",
        //     label: "Age",
        //     minValue: 0,
        // },
        {
            fieldType: "SelectList",
            name: "title",
            multi: false,
            label: "Title for set II",
            errors: {
                required: "Name is required",
            },
            options: ["Ms", "Mr", "Mx", "Dr", "Madam", "Lord"],
        },
        {
            fieldType: "SelectList",
            name: "title",
            multi: false,
            label: "Title for set II",
            errors: {
                required: "Name is required",
            },
            options: ["Ms", "Mr", "Mx", "Dr", "Madam", "Lord"],
        },
    ];

export const questionSetThree =
    [
        {
            stepName: 'Personal Info',
            step: '1',
            questions: [
                {
                    name: "lastName",
                    fieldType: "TextInput",
                    placeholder: "Pony Name",
                    label: "Pony Name:",
                },
                {
                    name: "date",
                    fieldType: "DatePicker",
                    label: "Pony rental date",
                },
            ],
        },
        {
            stepName: 'Company Info',
            step: '2',
            questions: [
                // {
                //     fieldType: "NumberInput",
                //     placeholder: "Age",
                //     name: "age",
                //     label: "Age: ",
                //     minValue: 0,
                // },
                {
                    fieldType: "SelectList",
                    name: "title",
                    multi: false,
                    label: "Title: ",
                    options: ["Ms", "Mr", "Mx", "Dr", "Madam", "Lord"],
                },
            ],
        },
        {
            stepName: 'Pony Ownership Info',
            step: '3',
            questions: [
                // {
                //     fieldType: "NumberInput",
                //     placeholder: "Age",
                //     name: "age",
                //     label: "Age",
                //     minValue: 0,
                // },
            ],
        },
    ];