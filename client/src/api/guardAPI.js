import $host from "./index";

export const fetchGuards = async () => {
    const {data} = await $host.get('api/guard')
    return data
}

export const fetchGuardsAtDate = async (date) => {
    const {data} = await $host.get('api/guard', {params: {date: date}})
    return data
}

export const fetchGuardById = async (_id) => {
    const {data} = await $host.get('api/guard/' + _id)
    return data
}