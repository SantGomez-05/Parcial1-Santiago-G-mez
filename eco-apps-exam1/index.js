//SANTIAGO GÓMEZ MELO
import express, { request, response } from "express";
import {
    Server
} from "socket.io";


const PORT = 5050;
const expressApp = express();
const httpServer = expressApp.listen(PORT, () => {
    console.table({
        'Game': `http://localhost:${PORT}/game`,
        'Controller': `http://localhost:${PORT}/controller`
    })

    fetch('http://localhost:5050/score')
    .then(response => response.json())
    .then(data => {
        let {content} = data;
        greetings = content;
        console.log(greetings)});

})
const io = new Server(httpServer, {
    path: '/real-time'
})

expressApp.use('/game', express.static('public-game'))
expressApp.use('/controller', express.static('public-controller'))
expressApp.use(express.json())

/*___________________________________________

1) Create the socket methods to listen the events and emit a response
It should listen for directions and emit the incoming data.
_____________________________________________ */

ioServer.on('connection', (socket) => {
    console.log(socket.id);
        socket.on("instructions-controller", message =>{
        console.log(message);
        socket.broadcast.emit("instructions-game", message);
    });
    socket.on("directions-controller", directionController => {
        console.log(directionController);
        socket.broadcast.emit("directions-game", directionController);
    });
});



let currentScore = 0;

//___________________________________________

//2) Create an endpoint to POST player's current score and print it on console
_____________________________________________ 


expressApp.post('/score', (request, response) => {
    request.body
    const bonnus = generateBonnus();
    response.send(bonnus);
    console.log(message);
})
//response.end no recordaba si iba a en el POST o en el GET, lo puse en el GET

___________________________________________

//3) Create an endpoint to GET player's final score and print it on canvas


expressApp.get('/final-score', (request, response) => {
    let message = {content: "Your score is ..."}
    response.send(message);
    response.end();
})


    
