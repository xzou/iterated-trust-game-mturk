var mongoose = require('mongoose');

var ParticipantSchema = mongoose.Schema({
    name: String,
    age: Number, 
    gender: String,
    ip: String,
    payoff: Number,
    opponentNumber: [Number],
    endowment: [Number],
    returned: [Number],
    reactionTime: [Number],
    proportion: [Number]
}, {
    timestamps: true
});

module.exports = mongoose.model('Participant', ParticipantSchema);
