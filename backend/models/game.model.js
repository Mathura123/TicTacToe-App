const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    gameSituation: {
        type: Number,
        required: true,
        min: 0,
        max: 2
    }
}, {
    timestamps: true
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;