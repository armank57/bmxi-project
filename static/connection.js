var socket;

// The http vs. https is important. Use http for localhost!
$(document).ready(function () {
    socket = io("localhost:5000", {
        transports: ["websocket"],
        cors: {
            origin: "localhost:3000",
        },
    });
});
