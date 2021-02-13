import Link from "next/link";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/Layout";
import Post from "../components/post";
import {getAllPostsData} from "../lib/posts";


export default function BlogPage({filteredPosts}) {
    return (
        <Layout title="blog">
            <ul>
                {filteredPosts && filteredPosts.map((post) => <Post key={post.id} post={post} />)}
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
    const filteredPosts = await getAllPostsData();
    return {
        props: {filteredPosts},
    };
}