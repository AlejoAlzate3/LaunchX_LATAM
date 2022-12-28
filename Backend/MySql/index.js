const express = require('express');
const app = express();
const port = 3000;
const programmingLanguajeRouter = require('./routes/programmingLanguajes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.use('/lenguajes', programmingLanguajeRouter);

app.use((err, req, res, next) => {
    const status = err.statusCode || 500;
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});