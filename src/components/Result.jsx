import { useLocation } from "react-router-dom";


const Result = () => {
  const location =useLocation();
  const totalScore=location.state?.totalScore || 0;
  const strength=location.state?.strength;
  const weakness=location.state?.weakness;
  const feedback=location.state?.feedback;



  return (
    <div className="container">
      <div className="score-container ">
        <h4>Total Score:{totalScore}</h4>
      </div>
      

      <div className="strength-container">
        <h4>Strength </h4>
        <h6>{strength}</h6>
      
      </div>
      <div className="weakness-container">
        <h4>Weakness </h4>
        <h6>{weakness}</h6> 
      </div>
       <div className="weakness-container">
        <h4>FeedBack </h4>
        <h6>{feedback}</h6> 
      </div>
    </div>
  );
};
export default Result;
