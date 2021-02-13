import Link from "next/link";
import {useRouter} from "next/router";

import Layout from "../../components/Layout";
import {getAllPostIds, getPostData} from "../../lib/posts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleLeft} from "@fortawesome/free-solid-svg-icons";


export default function Post({post}) {
    const router = useRouter();

    if (!post) {
        return <div>Loading</div>
    }
    return (
        <Layout title={post.title}>
            <p className="m-4">
                {"ID: "}
                {post.id}
            </p>
            <p className="mb-4 text-xl font-bold">{post.title}</p>
            <p className="mb-12">{post.created_at}</p>
            <p className="px-10">{post.content}</p>
            <Link href="/blog-page">
                <div className="flex cursor-pointer mt-12">
                    <FontAwesomeIcon icon={faAngleDoubleLeft} size="3x"/>
                </div>
            </Link> </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const post = await getPostData(params.id)
    return {
        props: {post}
    }
 }