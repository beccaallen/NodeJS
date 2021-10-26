let fs = require("fs");
let path = require("path");



let dataPath = path.join(__dirname, "../chirps.json");

fs.readFile(
  dataPath,
  {
    encoding: "utf-8",
  },
  (err, data) => {
JSON.parse(data).chirps.forEach(item => {
        console.log(item.username);
        console.log(item.chirp);
        console.log(" ")
        
    });
  }
);
