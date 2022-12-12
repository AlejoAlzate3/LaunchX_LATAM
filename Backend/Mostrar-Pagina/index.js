const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

router.get("/", function(req, res){
    res.sendFile(path.join(__dirname + '/templates/index.html'));
});

router.get("/contact", function(req, res){
    res.sendFile(path.join(__dirname + '/templates/contact.html'));
});

router.get("/about", function(req, res){
    res.sendFile(path.join(__dirname + '/templates/about.html'));
});

router.post("/", function(req, res){
    res.send("El usuario " + req.body.first_name + " ha sido registrado con éxito");
});

app.use("/", router);
app.listen(process.env.port || 8080);