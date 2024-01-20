var socket;

// The http vs. https is important. Use http for localhost!
$(document).ready(function () {
    socket = io("http://10.184.96.171:5000", {
        transports: ["websocket"],
        cors: {
            origin: "http://10.184.96.171:3000",
        },
    });
});
