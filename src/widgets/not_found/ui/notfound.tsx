import { Link } from "react-router-dom";

export function NotFound (){

    return <div className ="notfoundbox">

        <div className="notfound">
            <h1>404 NOT FOUND</h1>
                <h3 className="tacenter">
                    <Link to = "/" >на головну</Link>
                </h3>
            </div>
        </div>
    
    
}
