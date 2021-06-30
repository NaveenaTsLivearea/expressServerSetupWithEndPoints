const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.json());

const port = process.env.PORT || 5050;

app.get("/", (req, res) => {
  console.log(req.query);
  res.status(200).send("Hello  from endpoint");
});

app.post("/postData", (req, res) => {
  console.log(req.body);
  console.log(req.headers.authorization);
  res.status(200).send("Hello  from endpoint");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
