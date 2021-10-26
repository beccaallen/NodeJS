let fs = require("fs");
let path = require("path");
let rp = require("request-promise");

rp("https://reddit.com/r/popular.json")
    .then(raw => {
        let articles = JSON.parse(raw);

        articles.data.children.forEach(article => {
            let ext = path.extname(article.data.url);
            let name = article.data.id;

            if (ext === ".jpg" || ext === ".png") {
                rp(article.data.url, {encoding: "base64"})
                .then(content => {
                    fs.writeFile(path.join(__dirname,`./downloads/${name}${ext}`), content, {encoding: "base64"}, err => {
                                if (err) console.log(err);
                            })
                        
                        });
               
            }
        });
    }).catch((err) => console.log(err))
