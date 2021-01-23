import {BrowserRouter, Link, withRouter} from 'react-router-dom';
import './App.css';

function App(){
  return(
    
      <div className="app">
        <h1>Quiz Application</h1>
        
        <button><Link to="/pages/login" className="button"><p>Login &rarr;</p></Link></button>
        <button><Link to="/pages/signup" className="button"><p>Sign Up &rarr;</p></Link></button>
      </div>
   
    
    
  )
}

export default withRouter(App);