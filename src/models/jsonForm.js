const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const jsonFormSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        json: {
            type: String,
            required: true,
            default: ''
        },
        description: {
            type: String,
            default: ''
        }
    },
    { timestamps: true }
);

jsonFormSchema.plugin(toJSON);

const JsonForm = mongoose.model('JsonForm', jsonFormSchema);

module.exports = JsonForm;
