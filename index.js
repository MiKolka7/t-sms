const express  	= require('express');
const app      	= express();
const bot  		= require('telegram-bot-bootstrap');
const fs 		= require('fs');

const server = app.listen(3333, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Listening at http://%s:%s", host, port);
});


app.get('/api/send_sms', function (req, res) {
    console.log(req.query.data);
    var data = JSON.parse(req.query.data);
    console.log(data);
});

const TASSoft = new bot('AAFEC9g7c_AcqLXGvN7TfG5UDJQ3yhj6GNY');

TASSoft.getUpdates().then(console.log)
// → you'll see an update message. Look for your user_id in "message.from.id"

// Once you get your id to message yourself, you may:
TASSoft.sendMessage(245952112, "Hello there").then(console.log)
// → optional, will log the successful message sent over HTTP