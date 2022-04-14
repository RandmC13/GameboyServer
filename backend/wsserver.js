import { WebSocketServer } from "ws";
import crypto from "crypto";
import queryString from "query-string";

const password = "rickandmortyseason5";

const generateToken = (userPass) => {
    if (userPass === password) {
        return crypto.randomUUID();
    } else {
        return "fail";
    }
}

export default (expressServer) => {
    const websocketServer = new WebSocketServer({
        noServer:   true,
        path:   "/ws"
    });

    expressServer.on("upgrade", (request, socket, head) => {
        websocketServer.handleUpgrade(request, socket, head, (websocket) => {
            websocketServer.emit("connection", websocket, request);
        })
    });

    websocketServer.on("connection", (websocket, request) => {
        const [_path, requestParams] = request?.url?.split("?");
        const params = queryString.parse(requestParams);

        websocket.on("message", (data) => {
            let request = JSON.parse(data.toString());
            //Respond based on request type
            switch(request.type) {
                case "authenticate":
                    let token = generateToken(request.data);
                    websocket.send(token);
                    break;
            }
        });
    });

    return websocketServer;
};