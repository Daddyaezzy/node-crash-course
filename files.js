const fs = require("fs");

// //  reading files

// fs.readFile("./smallBlog/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// // writing files

// fs.writeFile("./smallBlog/blog1.txt", "Hello Everyone", () => {
//   console.log("file was written");
// });

// directories

// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder removed");
//   });
// }

// deleting files

if (fs.existsSync("./smallBlog/plsDelete.txt")) {
  fs.unlink("./smallBlog/plsDelete.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("delete successful");
  });
}
