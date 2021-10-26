let fs = require("fs");
let path = require("path");
let request = require("request");
let rp = require("request-promise");

let dataPath = path.join(__dirname, "/popular-articles.json");

//retrieve data via request-promise

rp("https://reddit.com/r/popular.json")
.then(raw => {
    let articles = JSON.parse(raw);
    
    let popularArticles = articles.data.children.map(article => {
		return {
			title : article.data.title,
            url : article.data.url,
            author: article.data.author
		}
    });

    fs.writeFile(dataPath, JSON.stringify(popularArticles, null, 1), err =>{
                  if(err) console.log(err)
    })
}).catch(err => console.log(err));

//retrieve data via request

// request("https://reddit.com/r/popular.json", (err, res, body) => {
//   if (err) console.log(err);
//   // parse data and log titles
//   JSON.parse(body).data.children.forEach((item) => {
//     fs.appendFileSync(dataPath, item.data.title + "\n");
//     fs.appendFileSync(dataPath, item.data.url + "\n");
//     fs.appendFileSync(dataPath, item.data.author + "\n");
//   });