import {useRouter} from "next/router";

import Cookie from "universal-cookie";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";


const cookie = new Cookie();


export default function MainPage() {
    const router = useRouter();
    const logout = () => {
        cookie.remove("access_token");
        router.push("/")
    }
    return (
        <span onClick={logout} className="cursor-pointer">
            <FontAwesomeIcon icon={faSignOutAlt} className="mt-10 cursor-pointer w-6 h-6"/>
        </span>
    )
}