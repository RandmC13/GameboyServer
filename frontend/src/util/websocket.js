const authenticate = (password, url) => {
    let websocket = new WebSocket(url);
    websocket.binaryType = "arraybuffer";

    const request = {
        type:   "authenticate",
        data:   password
    };

    return new Promise((resolve, reject) => {
        websocket.onopen = (e) => {
            websocket.send(JSON.stringify(request));
        };
    
        websocket.onmessage = (e) => {
            websocket.close();
            if (e.data === "fail") {
                reject(e.data);
            }
            resolve(e.data);
        };
    })
};

export { authenticate }