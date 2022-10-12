const JsonForm = require('../models/jsonForm');

const postJson = async (req, res) => {
    const { name, json, description } = req.body;
    try {
        const newJson = await JsonForm.create({
            name,
            json,
            description
        });
        res.status(200).json({ message: 'Create json form success', data: newJson });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

const getAll = async (req, res) => {
    try {
        const list = await JsonForm.find().sort('-createdAt');
        res.status(200).json({ message: 'Get list json form success', data: list });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

const getOne = async (req, res) => {
    try {
        const json = await JsonForm.findById(req.params.id);
        res.status(200).json({ message: 'Get json form success', data: json });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

const putJsonForm = async (req, res) => {
    try {
        const json = await JsonForm.findById(req.params.id);
        if (!json) {
            return res.status(503).json({ message: 'Not found josn form' });
        }
        Object.assign(json, { ...req.body, updatedAt: new Date() });
        const jsonNew = await json.save();
        res.status(200).json({ message: 'Update success', data: jsonNew });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

module.exports = {
    postJson,
    getAll,
    getOne,
    putJsonForm
};
