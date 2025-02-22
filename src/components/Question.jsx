import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Quiz() {
  const { name } = useContext(UserContext);
  const questions = [
    { question: "What is your ideal weekend activity?", options: ["Hiking", "Sleeping", "Playing with friends", "Exploring new places"] },
    { question: "What best describes your personality?", options: ["Energetic", "Laid-back", "Loyal", "Curious"] },
    { question: "What is your favorite type of weather?", options: ["Sunny and warm", "Cold and cozy", "Rainy and relaxing", "Breezy and fresh"] },
    { question: "Which type of food do you prefer?", options: ["Meat-based", "Vegetarian", "Seafood", "Anything and everything"] },
    { question: "How do you feel about meeting new people?", options: ["Love it!", "I'm a little shy", "Depends on the person", "I prefer animals"] },
    { question: "What kind of home do you like best?", options: ["A big house with a yard", "A cozy apartment", "A cabin in the woods", "A beach house"] }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  function handleAnswer() {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/results", { state: { name } });
    }
  }

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <Question question={questions[currentQuestionIndex].question} options={questions[currentQuestionIndex].options} onAnswer={handleAnswer} />
      ) : null}
    </div>
  );
}

function Question({ question, options, onAnswer }) {
  return (
    <div>
      <h2>{question}</h2>
      {options.map((option) => (
        <button key={option} onClick={() => onAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}
