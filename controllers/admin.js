const Admin = require("../models/admins");
const express = require("express");
const router = express.Router();


// Illustration Example:
// NOTE: use router object instead of app object here
/*
// callback approach
router.get("/", (req, res) => {
  mongo.getRepos(result => {
    res.send(result);
  });
});


// async await approach
router.get("/", async (req, res) => {
  const result = await mongo.getRepos();
  res.json(result);
});

*/

// write you routes (server API) here// async await approach
router.post("/login", async (req, res) => {
  console.log('req', req.body)
  // const result = await mongo.getRepos();
  
  const cb = (result) => {
    res.send(result)
  }


  Admin.getAll()
  
});



module.exports = router;
