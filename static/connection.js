var socket;

// The http vs. https is important. Use http for localhost!
$(document).ready(function () {
    socket = io("https://siege-bmxi-e694d2207037.herokuapp.com/", {
        transports: ["websocket"],
        cors: {
            origin: "https://siege-bmxi-e694d2207037.herokuapp.com/",
        },
    });
});
