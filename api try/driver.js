var Request = require("request");
var data;
Request.get("http://localhost:4000/Users/rohan9025", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    data=JSON.parse(body)
    console.dir(data);
});

