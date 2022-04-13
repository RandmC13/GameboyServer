import { WebSocketServer } from "ws";
import queryString from "query-string";

const password = "rickandmortyseason5";

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
            console.log(JSON.parse(data.toString()));
        });
    });

    return websocketServer;
};