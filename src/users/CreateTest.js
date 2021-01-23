import {withRouter, Link} from 'react-router-dom';

function CreateTest(){
    return(
        <div>
            <h1>Create A Test</h1>
            <label for ="test-name">Enter Name of The Test</label>
            <input name="test-name"></input>
            <br/><br/>
            <label for ="test-dur">Enter Duration of the test</label>
            <input name="test-dur"></input>
            <br/>
            <Link to= "/users/testname">
            <button>Go</button>
            </Link>
        </div>
    )
}

export default withRouter(CreateTest);