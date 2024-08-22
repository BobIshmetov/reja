const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
"mongodb+srv://bobmit16:WgAPryKr4qN6w1GJ@cluster0.edmyd.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(
    connectionString,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    },
(err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else{
        console.log("MondoDB connection succed"); 
        module.exports = client;  
                     
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
            console.log(
            `The server running successfully on port: ${PORT}, http://localhost:${PORT}`
           );    
        });
    }    
});


