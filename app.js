const express = require("express");
const app = express();
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
// connect to mongodbg
const dbURI =
  "mongodb+srv://aezzy6ix:Anselm123@nodetuts.ovxdlo8.mongodb.net/node-tuts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to database");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

// view engine

app.set("view engine", "ejs");

// testing middle ware and 'next()' method
// app.use((req, res, next) => {
//   console.log("new request made");
//   console.log("path:", req.url);
//   console.log("host:", req.hostname);
//   console.log("request:", req.method);
//   next();
// });

// middleware and static files
app.use(express.static("public-folder"));

// middleware and encoded data to read data inputed in a form
app.use(express.urlencoded({ extended: true }));

// mongoose and mongo sandbox route

// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "New blog 4",
//     snippet: "this is my blog",
//     body: "do you want to learn more about my blog",
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// passing objects into view files (ejs)
app.get("/", (req, res) => {
  // const blogs = [
  //   {
  //     title: "Yoshi finds eggs",
  //     snippet: "lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "Mario finds star",
  //     snippet: "lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "How to defeat browser",
  //     snippet: "lorem ipsum dolor sit amet consectetur",
  //   },
  // ];
  // res.render("index", { title: "Home", blogs });
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("blogs/about", { title: "About" });
});

// blog routes
app.use("/blogs", blogRoutes);

// redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
