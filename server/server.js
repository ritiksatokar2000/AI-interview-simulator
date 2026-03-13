const express = require("express")
const cors = require("cors");

const app =express();

app.use(cors());
app.use(express.json());

app.post("/generate-questions",async(req, res) => {
  const role =req.body.role;
  console.log("Role received:",role);

  res.json({
    questions:[
      `What is ${role}?`,
      `Explain key skills required for${role}`,
      `What tools are used in ${role}`,
      `What is future of ${role}`
    ]
  })
})

app.post("/evaluate", async(req,res) => {
  const interviewData = req.body.interviewData;
  console.log("interview Answer",interviewData)

  res.json({
    totalScore:7,
    strength:"Good in state management",
    weakness:"need to work on Hooks",
    feedback:"Can do better"
    
  })
})



app.listen(5000,() => {
  console.log("server unning on post 5000 http://localhost:5000");
})