import $host from "./index";

export const fetchGuards = async () => {
    const {data} = await $host.get('api/guard')
    return data
}

export const fetchGuardsAtDate = async (date) => {
    console.log(date)
    const {data} = await $host.get('api/guard', {params: {date: date}})
    console.log(data)
    return data
}