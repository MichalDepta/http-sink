function hello() {
    const serverUrl = 'localhost:5000';

    var request = new XMLHttpRequest();
    request.open('POST', `http://${serverUrl}/hello`, true);
    request.send("Hello from script!");
}

hello();