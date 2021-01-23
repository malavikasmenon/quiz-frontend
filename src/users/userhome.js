import {withRouter, Link} from 'react-router-dom';

function UserHome(){

    return(
        <div>
            <h1>This is the home page after login</h1>
            <Link to="/users/attempt"><button>Attempt Test</button></Link>
            <Link to="/users/create"><button>Create New Test</button></Link>
        </div>
        
    );
}

export default withRouter(UserHome);