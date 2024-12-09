import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer class="mt-5">
            <nav className="container text-center">
                <ul className="row">
                    <li className="col" >
                        000-111-2222
                    </li>
                    <li className="col">
                        Mahesh@TestEmail.com
                    </li>
                    <li className="col">
                        <Link
                        to ="http://linkedin.com/in/mahesh-gunasekaran-1245a941"
                        >
                        LinkedIn
                        </Link>
                    </li>
                    
                    <li className="col">
                        <Link
                        to ="http://github.com/Mahesh-GH24"
                        >
                        GitHub
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;