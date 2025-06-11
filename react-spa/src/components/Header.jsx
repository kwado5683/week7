import {Link} from "react-router";

export default function Header(){

    return(
        <>
            <h1>I am Header</h1>
            <nav style={{display:flex, justifyContent:"space-between"}}>
            <Link to={"/About"}>About</Link>
            <Link to={"/Hebrew"}>Hebrew</Link>
            </nav>
        </>   
    )
}