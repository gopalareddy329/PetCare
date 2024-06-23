import React, { useEffect, useState } from 'react';
import './1.css'
const QuestionForm = () => {
  // Define questions and answers
  const questions = [
    "What is your name?",
    "What is your age?",
    "What is your favorite color?"
    // Add more questions as needed
  ];

  // State to manage current question index and user answers
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  // Function to handle user's answer submission
  const handleAnswerSubmit = (answer) => {
     // Save the answer
    if(answer===""){
      setCurrentQuestionIndex(currentQuestionIndex + 1); 

    }else{
      setAnswers([...answers, answer]);
    }
    // Move to the next question
  };

  // Function to handle going to the previous question
  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };
  useEffect(()=>{
    console.log(answers)
  },[answers])

  // Calculate progress percentage
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="question-form">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      {currentQuestionIndex < questions.length ? (
        <div className="question-container">
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{questions[currentQuestionIndex]}</p>
          <input type="text" onChange={(e) => handleAnswerSubmit(e.target.value)} />
          <button onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>
            Previous
          </button>
          <button onClick={() => handleAnswerSubmit("")} disabled={currentQuestionIndex === questions.length - 1}>
            Next
          </button>
        </div>
      ) : (
        <div className="completion-message">
          <h2>Thank you for answering all questions!</h2>
          {/* Display summary or further actions here */}
        </div>
      )}
    </div>
  );
};

export default QuestionForm;
