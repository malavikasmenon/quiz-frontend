import {BrowserRouter, Link, withRouter} from 'react-router-dom';

function App(){
  return(
    
      <div>
        <h1>Quiz Application</h1>
        <Link to="/pages/login"><p>Login</p></Link>
        <Link to="/pages/signup"><p>Sign Up</p></Link>
      </div>
   
    
    
  )
}

export default withRouter(App);