import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
function Button({LinkTo, className, btnText}){
    return(
        <Link to={LinkTo}>
            <button className={className}>{btnText}</button>
        </Link>
    )
}

export default Button