import { withRouter, Link } from "react-router-dom";
import '../App.css';


function SignUp(){
    return(
        <div className="login">
            <h1 className="nav-head">Quiz App - Sign Up</h1>
            <div className="form-field">
                <div className="input">
                    <input className="login-input" placeholder="Name"></input>
                </div>
                <div className="input">
                    <input className="login-input" placeholder="Institution"></input>
                </div>
                <div className="input">
                    <input className="login-input" placeholder="Username"></input>
                </div>
                <div className="input">
                    
                    <input type="password" className="login-input" placeholder="Password"></input>
                </div>
                <Link to="/pages/login"><input type="submit" className="login-button" value="Sign Up &rarr;"></input></Link>
            </div>
            
        </div>
    )
}

export default withRouter(SignUp);