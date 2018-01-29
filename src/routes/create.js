module.exports = (request, response) => {
    console.log('request: ', request);
    if (request.body) {
        response.status(200).send(request.body);
    } else {
        response.sendStatus(400);
    }
};
