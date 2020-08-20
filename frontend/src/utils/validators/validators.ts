type RequiredType = (value: string) => string | undefined

export const required: RequiredType = value => {
    if (value && value.trim()) return undefined;
    return "Field  required";
}

type MaxLengthCreatorType = (maxLength: number) => RequiredType
export const maxLengthCreator: MaxLengthCreatorType = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}