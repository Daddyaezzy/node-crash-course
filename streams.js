const fs = require("fs");

const readStream = fs.createReadStream("./smallBlog/blog2.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./smallBlog/blog3.txt");

readStream.on("data", (chunk) => {
  console.log("----NEW CHUNK----");
  console.log(chunk);
});
writeStream.write("today is a brand new day");
