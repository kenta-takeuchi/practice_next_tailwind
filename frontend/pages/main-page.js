import {useRouter} from "next/router";
import Link from "next/link";

import Cookie from "universal-cookie";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/Layout";


const cookie = new Cookie();


export default function MainPage() {
    const router = useRouter();
    const logout = () => {
        cookie.remove("access_token");
        router.push("/")
    }
    return (
        <Layout title="main-page">
            <div>
                <Link href="/blog-page">
                    <a className="bg-indigo-500 mr-8 hover:bg-indigo-600 text-white px-4 py-12 rounded">
                        Visit Blog by SSG + ISR
                    </a>
                </Link>
                <Link href="/task-page">
                    <a className="bg-gray-500 mr-8 hover:bg-gray-600 text-white px-4 py-12 rounded">
                        Visit Blog by SSG + ISR
                    </a>
                </Link>
            </div>
            <span onClick={logout} className="cursor-pointer">
                <FontAwesomeIcon icon={faSignOutAlt} className="mt-10 cursor-pointer w-6 h-6"/>
            </span>
        </Layout>
    )
}