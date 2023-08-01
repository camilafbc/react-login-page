// import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
function Button({onClick, className, btnText}){
    return(
        // <Link to={LinkTo}>
        //     <button className={className}>{btnText}</button>
        // </Link>
        <button className={className} onClick={onClick}>{btnText}</button>
    )
}

export default Button