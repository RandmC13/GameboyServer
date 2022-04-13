import express from "express";
import path from "path";
import wsserver from "./wsserver.js";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

//Attach the websocket server
wsserver(server);