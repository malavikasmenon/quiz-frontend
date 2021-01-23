import {withRouter} from 'react-router-dom';

function AttemptTest(){
    return(
        <div>
            <h1>Attempt A Test</h1>
            <ul>
                <li>Test 1</li>
                <li>Test 2</li>
                <li>Test 3</li>
            </ul>
        </div>
    )
}

export default withRouter(AttemptTest);