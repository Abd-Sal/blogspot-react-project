export const Base64Converter = ({value})=>{
    return `Basic ${btoa(value)}`;
}