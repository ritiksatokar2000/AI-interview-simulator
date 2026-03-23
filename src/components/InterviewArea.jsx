import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const InterviewArea = () => {
  const [nextQuestion, setNextQuestion] = useState(0);

  const location = useLocation();
  const topic = location.state?.topic;
  const initialQuestions = location.state?.questions || [];
  const [questions, setQuestions] = useState(initialQuestions);
  const navigate = useNavigate();

  const handleAnswer = (value) => {
    const updateQuestions = [...questions];
    updateQuestions[nextQuestion].answer = value;
    setQuestions(updateQuestions);
  };

  const handleNext = () => {
    if (nextQuestion < questions.length - 1) {
      setNextQuestion(nextQuestion + 1);
    }
  };

  const handleSubmit = async () => {
   const response= await axios.post("http://localhost:5000/evaluate", {
      interviewData: questions,
    });

    console.log("Serve REsponse",response.data);
    navigate("/result", {
      state: response.data,
    });
  };

  return (
    <div className="container ">
      <h4>{topic}</h4>

      <div className="interview-container">
        <p>{questions[nextQuestion]?.question}</p>
      </div>
      <div className="interview-container">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{
            height: "100px",
            backgroundColor: "grey",
            border: "none",
            color: "white",
          }}
          value={questions[nextQuestion]?.answer || ""}
          onChange={(e) => handleAnswer(e.target.value)}
        ></textarea>
      </div>
      <div class="d-grid ">
        {nextQuestion === questions.length - 1 ? (
          <button
            class="btn btn-warning"
            type="button"
            style={{ margin: "20px" }}
            onClick={handleSubmit}
          >
            submit
          </button>
        ) : (
          <button
            class="btn btn-success"
            type="button"
            style={{ margin: "20px" }}
            onClick={handleNext}
          >
            next
          </button>
        )}
      </div>
    </div>
  );
};
export default InterviewArea;
