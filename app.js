const express = require('express')
const app = express()

let redirects = [
  {
    "code": "no",
    "url": "https://edazpotato.github.io/NO/"
  }
];

app.get('/', function (req, res) {
  if (redirects[{"code":code}]) {
    let link = redirects[{"code":code}].url;
    res.redirect(link);
  } else {
    res.send("Error 404: Redirect not found");
  }
})

app.listen(process.env.PORT || 8000, 
	() => console.log("Server is running..."));)
