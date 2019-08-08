export const utilities = {
    data() {
      return {
        title: 'utilities',
      };
    },
    created: function() {
      this.greetings();
    },
    methods: {
        isEmpty(value) {
            return !value || !value.trim();
        },
        capitalize(word) {
            return word.charAt(0).toUpperCase();
        },
    },
};

// export class StringUtil {
//     static isEmpty(value) {
//         return !value || !value.trim();
//     }

//     static capitalize(word) {
//         return word.charAt(0).toUpperCase();
//     }
// }
