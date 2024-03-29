//jshint esversion:6

const express = require("express");
const request = require("request");
const https = require("https");
const app = express();
app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));


app.get("/", function(req,res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/signup", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/login", function(req,res) {
    res.sendFile(__dirname + "/login.html");
})

 


app.post("/",function(req,res) {
    const firstName = req.body.fName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us20.api.mailchimp.com/3.0/lists/bab886f770";
    const options = {
        method:"POST",
        auth: "olaide1:dc6481caea65027741c605a2452a284f-us20"
    }

    const request = https.request(url, options, function(response) {
        console.log(response);

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }
        response.on("data", function(data) {
            console.log(JSON.parse(data));
        })
    })
    
    request.write(jsonData);
    request.end();
})

app.post("/failure", function(req, res) {
    res.redirect("/");
})





app.listen(process.env.PORT || 3000, function() {
    console.log("Listening on port 3000");
})