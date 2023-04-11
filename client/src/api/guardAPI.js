import $host from "./index";

export const fetchGuards = async () => {
    const {data} = await $host.get('api/guard')
    return data
}