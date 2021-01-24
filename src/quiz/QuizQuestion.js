import {withRouter} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function QuizQuestion(){
    
        


	/*const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
    ];*/
    
    const [loading, setLoading] = useState(true);
    const [problem, setProblem] = useState([]);
    const [error, setError] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:3003/questions')
          .then((response) => response.json())
          
          .then((data) => {
            alert(data);
            alert(data.questions);
            console.log(data);
            console.log("Chumma",data.questions);
            setLoading(false);
            setProblem(data.questions);
            console.log("hey", problem);
            console.log("first", problem[0]);
            console.log("answers", problem[0].answerOptions);
          })
          .catch((error) => {
            setLoading(false);
            setError('fetch failed');
            alert("Error");
            alert(error);
          });
      }, []);
    
      if (loading) {
        return <p>loading..</p>;
      }
    
      if (error !== '') {
        return <p>ERROR: {error}</p>;
      }

	

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		
    };
    
    function handleNext() {
        const nextQuestion = currentQuestion + 1;
		if (nextQuestion < problem.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
    }
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {problem.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{problem.length}
						</div>
						{<div className='question-text'>{problem[currentQuestion].questionsText}?</div> }
					</div>
					<div className='answer-section'>
						{problem[currentQuestion].answerOptions.map((answerOption) => (
                            <div>
							<button className="button-option" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            </div>
						))}
					</div>
                    <hr></hr>
                    <button onClick={handleNext}>
                        Next
                    </button>
				</>
                        )}
            <style jsx>
                {
                    `
                    .button-option{
                        width: 150px;
                        background-color: white;
                        padding: 1em;
                        margin-top: 10px;
                        cursor: pointer;
                        
                    }
                    
                    `
                }
            </style>
		</div>
	);
}
    


export default withRouter(QuizQuestion);