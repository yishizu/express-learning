const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "Test" });
});

router.post("/", (req, res) => {
  const isValid = true;
  if(isValid){
      users.push({firstName:req.body.firstName})
      res.redirect(`/users/${users.length-1}`)
  }else{
      console.log('Error')
      res.rednder("users/new",{firstName:req.body.firstName})
  }
  
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`User With ID ${req.params.id} ${req.user.firstName}`);
  })
  .put((req, res) => {
    res.send(`Put User With ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`);
  });

const users = [{ name: "Yuko" }, { name: "Kozue" }];
router.param("id", (req, res, next, id) => {
  console.log(id);
  req.user = users[id];
  next();
});
/*
router.get('/:id', (req,res) =>{
    res.send(`User With ID ${req.params.id}`)
})
router.put('/:id', (req,res) =>{
    res.send(`Update User With ID ${req.params.id}`)
})
router.delete('/:id', (req,res) =>{
    req.params.id
    res.send(`Delete User With ID ${req.params.id}`)
})*/
module.exports = router;
