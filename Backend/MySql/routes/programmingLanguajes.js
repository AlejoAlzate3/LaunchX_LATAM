const express = require('express');
const router = express.Router();
const programmingLanguajeService = require('../services/programmingLanguaje');

// routes
router.get('/', async function (req, res, next) {
    try {
        res.json(await programmingLanguajeService.read(req.query.page));
    } catch (err) {
        console.error(`Error while getting programming languajes `, err.message);
        next(err);
    }
});

router.post('/', async function (req, res, next) {
    try {
        res.json(await programmingLanguajeService.create(req.body));
    } catch (err) {
        console.error(`Error while creating programming languaje `, err.message);
        next(err);
    }
});

router.put('/:id', async function (req, res, next) {
    try {
        res.json(await programmingLanguajeService.update(req.params.id, req.body));
    } catch (err) {
        console.error(`Error while updating programming languaje `, err.message);
        next(err);
    }
});

router.delete('/:id', async function (req, res, next) {
    try {
        res.json(await programmingLanguajeService.delete1(req.params.id));
    } catch (err) {
        console.error(`Error while deleting programming languaje `, err.message);
        next(err);
    }
});

module.exports = router;