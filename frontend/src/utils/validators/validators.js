export const required = value => {
    if (value && value.trim()) return undefined;
    return "Field  required";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}