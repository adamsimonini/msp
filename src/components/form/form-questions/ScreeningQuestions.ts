export const questionSetOne = 
    [
        {
            step: '1',
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
    ]