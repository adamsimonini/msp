export const questionSetOne = 
    [
        {
            fieldType: "SelectList",
            name: "title",
            multi: false,
            label: "Title for set I",
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
        {
            fieldType: "NumberInput",
            placeholder: "Age",
            name: "age",
            label: "Age",
            minValue: 0,
        }
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
        {
            fieldType: "NumberInput",
            placeholder: "Age",
            name: "age",
            label: "Age",
            minValue: 0,
        },
        {
            fieldType: "SelectList",
            name: "title",
            multi: false,
            label: "Title for set II",
            options: ["Ms", "Mr", "Mx", "Dr", "Madam", "Lord"],
        },
    ]