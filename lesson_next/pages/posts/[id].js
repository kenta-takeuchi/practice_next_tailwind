import Link from "next/link";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleLeft} from "@fortawesome/free-solid-svg-icons";


import Layout from "../../components/Layout";
import {getAllPostsId, getPostData} from "../../lib/posts";

export default function Post({post}) {
    if (!post) {
        return <div>Loading...</div>
    }
    return (
        <Layout title={post.title}>
            <p className="m-4">
                ID: {Post.id}
            </p>
            <p className="mb-8 text-xl font-bold">{post.title}</p>
            <p className="px-10">{post.body}</p>
            <Link href={"/blog_page"}>
                <div className="flex cursor-pointer mt-12">
                    <FontAwesomeIcon icon={faAngleDoubleLeft} size="3x" />
                </div>
            </Link>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getAllPostsId();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    const post = await getPostData(params.id)
    return {
        props: {
            post,
        }
    }
}