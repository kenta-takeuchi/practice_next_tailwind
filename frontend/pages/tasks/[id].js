import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect} from 'react'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleLeft} from "@fortawesome/free-solid-svg-icons";


import Layout from "../../components/Layout";
import {getAllTaskIds, getTaskData} from "../../lib/tasks";
import useSWR from "swr";


const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Task({staticTask, id}) {
    const router = useRouter();
    const {data: task, mutate} = useSWR(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/tasks/detail/${id}`,
        fetcher,
        {initialData: staticTask}
    )

    useEffect(() => {
        mutate()
    }, [])

    console.log(task)

    if (router.isFallback || !task) {
        return <div>Loading...</div>
    }

    return (
        <Layout title={task.title}>
            <p className="m-4">
                ID: {task.id}
            </p>
            <p className="mb-8 text-xl font-bold">{task.title}</p>
            <p className="mb-8 text-xl font-bold">{task.created_at}</p>
            <Link href={"/task-page"}>
                <div className="flex cursor-pointer mt-12">
                    <FontAwesomeIcon icon={faAngleDoubleLeft} size="3x" />
                </div>
            </Link>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getAllTaskIds();
    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({params}) {
    const staticTask = await getTaskData(params.id)
    return {
        props: {
            id: staticTask.id,
            staticTask,
        },
        revalidate: 3
    }
}