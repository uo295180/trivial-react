import { useState } from "react";

let QuestionComponent = (props) => {
    let { questions, setPoints, points } = props
    let [numberOfQuestion, setNumberOfQuestion] = useState(0);
    let answerQuestion = (answer) => {
        if(answer == questions[numberOfQuestion].answer){
            setPoints(points + 1)
            // msg
            console.log("Correct");
        } else {
            // msg 
            console.log("Incorrect");
        }

        if ( numberOfQuestion < questions.length - 1){
            setNumberOfQuestion(numberOfQuestion+1)
        } else{

            setTimeout(() => {
                setNumberOfQuestion(0)
                setPoints(0)
            }, 4000)
            
        }
    }

    return (
        <div className="question">
            <div>
                <h2>Question</h2>
                <p id="questionText">{questions[numberOfQuestion].text}</p>
                <ul className="options">
                    {questions[numberOfQuestion].options.map( (o) => 
                        <li key={o}><button onClick={() => {answerQuestion(questions[numberOfQuestion].options.indexOf(o))}}>{o}</button></li>)}
                </ul>
            </div>
        </div>
    )
}

export default QuestionComponent