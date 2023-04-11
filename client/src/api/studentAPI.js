import $host from "./index";

export const fetchStudents = async () => {
    const {data} = await $host.get('api/student')
    return data
}