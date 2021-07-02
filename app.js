const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());

app.use(require("./router"));

app.use(express.json());

const port = process.env.PORT || 5050;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
