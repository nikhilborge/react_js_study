import { useParams } from "react-router-dom";



function ParamUser(){
    const param = useParams();
    const {name} = param;
    console.log(name);
    return(
        <div>
            <h1>This is {name} param page</h1>
        </div>
    )
}

export default ParamUser;