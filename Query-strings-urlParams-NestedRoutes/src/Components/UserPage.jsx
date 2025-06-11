import {useParams} from "react-router";

export  function UserPage(){

    let {username} = useParams();

    return(
        <h1>User ID: {username}</h1>
    )
}