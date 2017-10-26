module.exports = (app) => {
    var participants = require('../controllers/participant.controller.js');

    /* '/api/participants'
     *  GET: finds all participants
     *  POST: creates a new participants
     */
    app.get('/api/participants', participants.findAll);

    app.post('/api/participants', participants.create);

    /* '/api/participants/:id'
     *  GET: find participant by id
     *  PUT: update participant by id
     *  DELETE: delete participant by id
     */
    app.get('/api/participants/:participantId', participants.findOne);

    app.put('/api/participants/:participantId', participants.update);

    app.delete('/api/participants/:participantId', participants.delete);
};
