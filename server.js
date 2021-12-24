const express = require("express");
const app = express();

app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs");
app.use(logger)

app.listen(3000);
app.get("/", (req, res) => {
  console.log("Here");
  res.render("index", { texttyt: "World" });
});

const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");
app.use("/users", userRouter);
app.use("/posts", postRouter);

function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}