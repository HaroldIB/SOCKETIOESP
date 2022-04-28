const app = require('./app');

const PORT = process.env.PORT || 3000;

const socket = require('socket.io');

const server = app.listen(PORT, ()=>{
    console.log("Servidor creado exitosamente en el puerto "+PORT);
})

const io = socket(server);

io.on('connection', function(socket){
    console.log("Un cliente se conectó a socket.io "+socket.id);
    
})