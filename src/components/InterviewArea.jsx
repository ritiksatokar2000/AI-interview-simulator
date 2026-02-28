import { useState } from "react";
import { useLocation } from "react-router-dom";

const InterviewArea = () => {
  const[nextQuestion,setNextQuestion]=useState(0);
  const location=useLocation();
  const topic = location.state?.topic;
  const questions=[
    {id:1,
      quest:"what is react"
    },
     {id:2,
      quest:"what is HOOk"
    },
     {id:3,
      quest:"what is useeffect"
    }
  ];

  const handleNext=()=>{
    if(nextQuestion<questions.length-1){
setNextQuestion(nextQuestion+1)
    }
    
  }

  return (
    <div className="container ">
      <h4>{topic}</h4>

      <div className="interview-container">
        <p>{questions[nextQuestion].quest}</p>
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
        ></textarea>
      </div>
      <div class="d-grid ">
        {nextQuestion===questions.length-1 ? <button class="btn btn-warning" type="button" style={{margin:"20px"}}>
          submit
        </button>:<button class="btn btn-success" type="button" style={{margin:"20px"}} onClick={handleNext}>
          next
        </button>  }
        
         
        
        
      </div>
    </div>
  );
};
export default InterviewArea;
