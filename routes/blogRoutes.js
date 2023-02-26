const express = require("express");

const blogControllers = require("../controllers/blogControllers");
const route = express.Router();

route.get("/", blogControllers.blog_index);

route.get("/create", blogControllers.blog_create);

// post request
route.post("/", blogControllers.blog_create_post);

route.get("/:id", blogControllers.blog_details);

// delete request
route.delete("/:id", blogControllers.blog_delete);
module.exports = route;
