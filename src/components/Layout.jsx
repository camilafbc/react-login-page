import { Link } from "react-router-dom";
import logo from "../assets/logoipsum-261.svg";

// eslint-disable-next-line react/prop-types
function Layout({ children }){
    return (
        <div className="container">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="logo-ipsum" />
                </Link>
            </div>
            {children}
        </div>
    )
}

export default Layout