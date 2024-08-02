import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));
// app.use(morgan("tiny"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/submit", (req, res) => {
  console.log(req.body);       // Precisa do bodyParser para carregar as informações.
  res.send("Form submitted successfully");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
