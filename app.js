const express = require('express');
const app = express();

let redirects = [
  {
    "code": "no",
    "url": "https://edazpotato.github.io/NO/"
  }
];

app.get('/', function (req, res) {
let code = "no";
  if (redirects.find(el => el.code === code)) {
    let link =redirects.find(el => el.code === code).url;
    res.redirect(link);
  } else {
    res.send("Error 404: Redirect not found");
  }
});

app.listen(process.env.PORT || 80, () => console.log("Server is running..."));)
