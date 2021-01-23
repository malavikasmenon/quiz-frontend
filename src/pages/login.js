import { Link, withRouter } from "react-router-dom";
import '../App.css';


function Login(){
    return(
        <div className="login">
            <h1>Quiz App - Login</h1>
            <div className="form-field">
                <div className="input">
                    <input className="login-input" placeholder="Username"></input>
                </div>
                <div className="input">
                    
                    <input type="password" className="login-input" placeholder="Password"></input>
                </div>
                <Link to="/users/userhome"><input type="submit" className="login-button" value="Login &rarr;"></input></Link>
            </div>
            
        </div>
    )
}

export default withRouter(Login);