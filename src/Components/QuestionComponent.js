import { useState } from "react";

let QuestionComponent = (props) => {
    let { questions } = props
    let [numberOfQuestion, setNumberOfQuestion] = useState(0);
    return (
        <div className="question">
            <div>
                <h2>Question</h2>
                <p id="questionText">{questions[numberOfQuestion].text}</p>
                <ul className="options">
                    {questions[numberOfQuestion].options.map( (o) => 
                        <li key={o}><button onClick={() => {console.log(o)}}>{o}</button></li>)}
                </ul>
            </div>
        </div>
    )
}

export default QuestionComponent