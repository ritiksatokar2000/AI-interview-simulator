import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const[topic,setTopic]=useState();
  const topicElement =useRef();
  const navigate = useNavigate();

  const handleTopic=() =>{
    const selectedTopic = topicElement.current.value
    navigate("/interview",{
      state:{topic:selectedTopic}
    })
    

  }

  return (
    <div className="container home-container">
      <center>
      <h1 class="display-1">AI Interview Platform</h1>
      <p>
        Welcom to AI interview platfor this place is made to get ready for your
        job this model will help you to give top question which are ask in top
        companies we have tain this in such a way that it will make you fell as
        if you are giving rall interview
      </p>

      <div class="input-group  input-group-lg mb-3" style={{maxWidth:"50%"}}>
       
        <select class="form-select" ref={topicElement} id="inputGroupSelect01">
          <option value="React Devloper">React Devloper</option>
          <option value="Ai Devloper">Ai Devloper</option>
          <option value="Data Analyst">Data Analyst</option>
        </select>
      </div>
      <button type="button" class="btn btn-success" onClick={handleTopic} >Ask Question</button>
      </center>
    </div>
  );
};
export default Home;
