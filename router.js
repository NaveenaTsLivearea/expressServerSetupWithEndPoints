const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query);
  res.status(200).send("Hello  from endpoint");
});

router.post("/postData", (req, res) => {
  console.log(req.body);
  console.log(req.headers.authorization);
  res.status(200).send("Hello  from endpoint");
});

router.post("/item/:id", (req, res) => {
  console.log(req.params.id);
  res.status(200).send("Item no : " + req.params.id);
});

router.get("/auth", async (req, res) => {
  let authHeader = req.headers.authorization;
  if (authHeader == undefined) {
    res.status(401).send("Auth headers are not defined");
    return;
  }

  let checkAuth = await checkAuthFn(authHeader);

  if (checkAuth == false) {
    res.status(403).send("Worng credentials");
    return;
  }
  let qs = req.query.code;
  let validqs = await sanityCheck(qs);
  console.log(validqs);

  res.status(200).send("Yep Authentication Successfull");
});

async function sanityCheck(str) {
  return str.replace(/<script.*?>.*?<\/script>/gim, "");
}

async function checkAuthFn(token) {
  let uname = process.env.uname;
  let password = process.env.password;

  let b64Token = Buffer.from(uname + ":" + password).toString("base64");

  b64Token = "Basic " + b64Token;

  if (token === b64Token) {
    return true;
  } else {
    return false;
  }
}

module.exports = router;
