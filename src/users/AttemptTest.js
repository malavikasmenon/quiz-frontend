import {withRouter, Link} from 'react-router-dom';

import {useState, useEffect} from 'react';


 function AttemptTest() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:3003/users')
          .then((response) => response.json())
          
          .then((data) => {
            //alert(data);
            setLoading(false);
            setData(data.users);
          })
          .catch((e) => {
            setLoading(false);
            setError('fetch failed');
            alert(error);
          });
      }, []);
    
      if (loading) {
        return <p>loading..</p>;
      }
    
      if (error !== '') {
        return <p>ERROR: {error}</p>;
      }
    
    

    return(
        <div>
            <h3>Choose Quiz</h3>
            <ul className = "candidates-list">
                {data.map((element) => 
                <li className="list-item">
                   <h4> {element.name} </h4>
                   <p> Created By: {element.location} </p>
                   <p> Topic: {element.word}</p>
                   
                   <div className = "skills-wrap">
                     <Link to="/quiz/quizquestion"><div className="skills-item">Take Quiz &rarr;</div></Link> 
                   </div>
                </li>
                )}
            </ul>

            <style jsx>
                {`
                h3{
                    text-align: center;
                }
                .list-item {
                    padding: 1em;
                    border: 2px solid #c0c0c4;
                    list-style: none;
                    max-width: 50%;
                    margin: auto;
                    margin-bottom: 10px;
                    border-radius: 15px
                }
                .skills-wrap{
                    display: flex;
                }
                .skills-item{
                  padding: 10px;
                  margin-right: 10px;
                  background-color: #356BE0;
                  color: white;
                  font-weight: bold;
                  border-radius: 5px;
                  cursor: pointer;
                }
                `}
            </style>
        </div>


    )
}
export default withRouter(AttemptTest);