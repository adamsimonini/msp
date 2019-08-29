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
                },
                {
                    name: "ponyBreed",
                    fieldType: "TextInput",
                    placeholder: "",
                    label: "Breed",
                },
                {
                    name: "ponyPower",
                    fieldType: "TextInput",
                    placeholder: "",
                    label: "Horse Power",
                },
                {
                    name: "ponyMagic",
                    fieldType: "TextInput",
                    placeholder: "",
                    label: "Magical Ability",
                },
            ]
            
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
                    options: ["Ms", "Mr", "Mx", "Dr", "Madam", "Lord"], 
                },
                {
                    name: "firstName",
                    fieldType: "TextInput",
                    placeholder: "First Name",
                    label: "First Name",
                },
                {
                    name: "lastName",
                    fieldType: "TextInput",
                    placeholder: "Last Name",
                    label: "Last Name:",
                },
            ]
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
                }
            ]
            
        },
    ]

export const questionSetTwo = 
    [
        {
            fieldType: "TextInput",
            placeholder: "First Name",
            label: "First Name",
            name: "firstName",
        },
        {
            fieldType: "TextInput",
            placeholder: "Last Name",
            label: "Last Name",
            name: "lastName",
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
            options: ["Ms", "Mr", "Mx", "Dr", "Madam", "Lord"],
        },
        {
            fieldType: "SelectList",
            name: "title",
            multi: false,
            label: "Title for set II",
            options: ["Ms", "Mr", "Mx", "Dr", "Madam", "Lord"],
        },
    ]

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
            ]
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
                }
            ]
            
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
            ]
            
        },
    ]