import { useState } from "react";

let QuestionComponent = (props) => {
    let { questions, setPoints, points } = props
    let [numberOfQuestion, setNumberOfQuestion] = useState(0);
    let [message, setMessage] = useState(null);

    let answerQuestion = (answer) => {
        if(answer == questions[numberOfQuestion].answer){
            setPoints(points + 1)
            setMessage("Right answer");
            console.log("Correct");
        } else {
            setMessage("Wrong answer")
            console.log("Incorrect");
        }

        if ( numberOfQuestion < questions.length - 1){
            setTimeout(() => {
                setMessage(null)
            }, 2000)
            setNumberOfQuestion(numberOfQuestion+1)
        } else{
            setTimeout(() => {
                setMessage("Finnish")
            }, 2000)
            setTimeout(() => {
                setMessage(null)
                setNumberOfQuestion(0)
                setPoints(0)
            }, 4000)
            
        }
    }

    return (
        <div className="question">
            { message != null &&
                <h2>{message}</h2>
            }
            <div>
                <h2>Question</h2>
                <p id="questionText">{questions[numberOfQuestion].text}</p>
                <ul className="options">
                    {questions[numberOfQuestion].options.map( (o, i) => 
                        <li key={o}><button onClick={() => {answerQuestion(i)}}>{o}</button></li>)}
                </ul>
            </div>
        </div>
    )
}

export default QuestionComponent