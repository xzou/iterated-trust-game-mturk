var mongoose = require('mongoose');

var ParticipantSchema = mongoose.Schema({
    name: String,
    age: Number, 
    gender: String,
    ip: String,
    mturkCode: String,
    payoff: Number,
    opponentNumber: [Number],
    endowment: [Number],
    returned: [Number],
    reactionTime: [Number],
    proportion: [Number],
    isComplete: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Participant', ParticipantSchema);
