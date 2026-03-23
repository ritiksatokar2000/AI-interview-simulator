const{GoogleGenerativeAI}=require("@google/generative-ai")
const genAI = new GoogleGenerativeAI("Enter your API");

const express = require("express")
const cors = require("cors");

const app =express();

app.use(cors());
app.use(express.json());

app.post("/generate-questions",async(req, res) => {
  const role =req.body.role;
  
  const model= genAI.getGenerativeModel({model: "models/gemini-2.5-flash"});
  const prompt = `
  You are an Interview expert.
  Generate 5 interview questions for a ${role} role.
  Rules:
  -Return ONLY the Questions
  -Do not add numbering
  -Do not add explanations
  -Each Question must be on a new line
  `;
  const result = await model.generateContent(prompt);
  const response = result.response.text();
  const questions = response.split("\n").filter(q => q.trim() !== "");


  res.json({
    questions:questions
  })
})

app.post("/evaluate", async(req,res) => {
  const interviewData = req.body.interviewData;

  const model = genAI.getGenerativeModel({model: "models/gemini-2.5-flash"});
  const prompt = ` 
  Evaluate this interview : ${JSON.stringify(interviewData)} Give response in JSON format:
  {
    "totalScore":number between 1-10,
    "strength": "text",
    "weakness":"text",
    "feedback":"text"
  }`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

 const cleanText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const data = JSON.parse(cleanText);

  res.json(data);

})



app.listen(5000,() => {
  console.log("server unning on post 5000 http://localhost:5000");
})