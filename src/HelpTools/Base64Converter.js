export const Base64Converter = ({username, password})=>{
    return `Basic ${btoa(`${username}:${password}`)}`;
}