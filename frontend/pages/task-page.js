import Link from "next/link";
import useSWR from "swr";
import {useEffect} from 'react';

import Layout from "../components/Layout";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {getAllTasksData} from "../lib/tasks";
import Task from "../components/task";


const fetcher = (url) => fetch(url).then((res) => res.json());
const apiUrl = `${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/task/list/`

export default function TaskPage({staticFilteredTasks}) {
    const {data: tasks, mutate} = useSWR(apiUrl, fetcher, {
        initialData: staticFilteredTasks,
    })

    const filteredTasks = tasks?.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    useEffect(() => {
        mutate();
    }, [])

    return (
        <Layout title="task">
            <ul>
                {filteredTasks && filteredTasks.map((task) => <Task key={task.id} task={task}/>)}
            </ul>
            <Link href="/main-page">
                <span>
                    <FontAwesomeIcon icon={faSignOutAlt} className="mt-10 cursor-pointer w-6 h-6"/>
                </span>
            </Link>
        </Layout>
    )
}


export async function getStaticProps() {
    const staticFilteredTasks = await getAllTasksData();
    return {
        props: {staticFilteredTasks},
        revalidate: 3
    }
}

