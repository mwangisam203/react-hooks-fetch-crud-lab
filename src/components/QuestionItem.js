
import React from "react";

function QuestionItem({ question ,onDeleteQuestion  }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
//function to handle delete question
  function handleDeleteQuestion() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => {
      onDeleteQuestion(question);
    });
  } 
  function handleDeleteQuestion(questionToDelete) {
    const updatedQuestions = questions.filter(
      (question) => question.id !== questionToDelete.id
    );
  };


  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button
      onClick={handleDeleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
