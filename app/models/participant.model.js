var mongoose = require('mongoose');

var ParticipantSchema = mongoose.Schema({
    age: Number, 
    gender: String,
    experiment: Number,
    ip: String,
    isCorrect: Boolean,
    mturkCode: String,
    name: String,
    numCorrect: Number,
    payoff: Number,
    actualProportion: [Number],
    endowment: [Number],
    netGains: [Number],
    opponentNumber: [Number],
    proportion: [Number],
    reactionTime: [Number],
    returned: [Number],
}, {
    timestamps: true
});

module.exports = mongoose.model('Participant', ParticipantSchema);
