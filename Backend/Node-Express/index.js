let express = require('express');
let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Read
app.get('/', function (req, res) {
    res.send('Hello World');
});

//Create
app.post('/', function (req, res) {
    res.send(`Hello ${req.body.name}`);
});


//Update
app.put('/', function (req, res) {
    res.send(`Has actualizado el registro numero ${req.body.id}`);
});


//Delete
app.delete('/users', function (req, res) {
    res.send(`Has eliminado el registro ${req.query.user}`);
});

let server = app.listen(8080, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
});