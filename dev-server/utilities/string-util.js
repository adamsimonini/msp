export default () => {
    function isEmpty(value) {
        return !value || !value.trim();
    }

    function capitalize(word) {
        return word.charAt(0).toUpperCase();
    }
}
