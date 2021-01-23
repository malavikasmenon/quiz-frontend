import {withRouter, Link} from 'react-router-dom';
import IconImage from '../iconHome.svg';

function UserHome(){

    const mystyle = {
        padding: "10px",

        fontFamily: "Arial",
        margin: "0",
        //border: "1px solid red"
      };

    const headingStyle = {
        color: "gray",
        marginLeft: "0px",
        marginRight: "0px",
        marginTop: "0px",
        padding:"1.6em",
        borderBottom: "1px solid black",
        
    };

    const imageStyle = {
        height: "400px",
        width: "400px",
        marginLeft: "600px",
        //border: "1px solid black"
    };

    const myButton = {
        backgroundColor: "#6C63FF",
        color: "white",
        padding: "1em",
        borderRadius: "12px",
        border: "#6C63FF",
        cursor: "pointer"
        //marginLeft: "80px",
        //marginBottom: "10px",
        //marginTop: "10px"
    }

    const paraStyle = {
        maxWidth: "250px",
        maxHeight: "100px",
        //border: "1px solid black",
        paddingBottom: "0",
        marginLeft: "80px",
        marginTop: "80px",
        alignContent: "center",
        justifyContent: "center",
        alignItem: "center",
        
    }

    const container = {
        marginTop: 0,
        display: "flex",
        flexDirection: "row",
        //border: "1px solid black",
        padding: 0,
        //backgroundColor: "gray"
    }

    return(
        <div className="user-home" style={mystyle}>
            
            <h1 style={headingStyle}>Quiz App</h1>
            <div style = {container}>

                
                <p style={paraStyle}>Get started at QuizUp by creating versatile quizzes or attempting these exciting ones!
                The perfect destination for schools, teams and workplaces to conduct surveys, quizzes and exams!
                <br/><br/><br/><br/>
                <Link to="/users/attempt"><button style={myButton}>Take Quiz</button></Link>
                <br/><br/>
                <Link to="/users/create"><button style={myButton}>Create New Quiz</button></Link>
                
                </p>
                <img src={IconImage} style={imageStyle}></img>
            </div>
            
            
        </div>
        
    );
}

export default withRouter(UserHome);