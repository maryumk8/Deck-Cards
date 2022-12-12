let API = "http://192.168.18.104:3000/checkGameState";
export const handlePost = (info) => {
    return fetch(`${API}`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ data: info })
    });
};
