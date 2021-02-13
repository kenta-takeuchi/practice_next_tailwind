import fetch from "node-fetch";


export async function getAllTasksData() {
    const res = await fetch(
        new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/task/list/`)
    );
    const tasks = await res.json();
    console.log(tasks)
    return tasks.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
}


export async function getAllTaskIds() {
    const res = await fetch(
        new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/task/list/`)
    );
    const tasks = await res.json();
    return tasks.map((task) => {
        return {
            params: {
                id: String(task.id),
            }
        }
    });
}


export async function getTaskData(id) {
    const res = await fetch(
        new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/task/detail/${id}/`)
    );
    return await res.json();
}