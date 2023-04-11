import $host from "./index";

export const fetchAllStudents = async () => {
    const {data} = await $host.get('api/student')
    return data
}