import { Link, withRouter } from "react-router-dom"


function Login(){
    return(
        <div>
            <h1>This is the login page.</h1>
            <Link to="/users/userhome"><button>Login</button></Link>
        </div>
    )
}

export default withRouter(Login);