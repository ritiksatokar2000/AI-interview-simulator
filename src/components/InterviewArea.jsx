import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const InterviewArea = () => {
  const [loading, setLoding] = useState(false);

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
    try {
      setLoding(true)
      const response = await axios.post(`${baseUrl}/evaluate`, {
        interviewData: questions,
      });

      console.log("Serve REsponse", response.data);
      navigate("/result", {
        state: response.data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoding(false)
    }
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
            disabled={loading}
          > {loading ? "Evaluating Answer" : " submit"}
           
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
