import { withRouter, Link } from "react-router-dom"


function SignUp(){
    return(
        <div>
            <h1>This is the signup page.</h1>
            <Link to="/pages/login">
                <button>Sign Up</button>
            </Link>
        </div>
    )
}

export default withRouter(SignUp);