let fs = require("fs");
let path = require("path");
let request = require("request");
let rp = require("request-promise");

let dataPath = path.join(__dirname, "/downloads.json");


rp("https://reddit.com/r/popular.json")
.then(raw=>{
    let articles = JSON.parse(raw);
    console.log(articles)
    if(articles.data.children.extname === ".jpg"){
        
    }

    
})