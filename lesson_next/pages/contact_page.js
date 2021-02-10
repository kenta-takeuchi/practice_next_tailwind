import Layout from "../components/Layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-regular-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <Layout title="Contact">
            <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
                <div className="mt-4">
                    <p className="font-bold">Contact info</p>
                </div>
                <div className="flex justify-center mt-4">
                    <FontAwesomeIcon icon={faUserCircle} size="5x"/>
                </div>
                <div className="mt-4">
                    <p className="font-bold">Address</p>
                    <p className="text-xs mt-2 text-gray-600">city A</p>
                    <p className="font-bold mt-5">Email</p>
                    <p className="text-xs mt-2 text-gray-600">abc@text.com</p>
                    <p className="font-bold mt-5">Phone</p>
                    <p className="text-xs mt-2 text-gray-600">000-1234-5678</p>
                </div>
                <div className="mt-6 flex justify-around">
                    <div>
                        <FontAwesomeIcon icon={faGithub} size="3x"/>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faFacebook} size="3x"/>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faTwitter} size="3x"/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact