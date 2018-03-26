function hello() {
    const serverUrl = '';

    var request = new XMLHttpRequest();
    request.open('POST', `http://${serverUrl}/hello`, true);
    request.send("Hello from script!");
}

hello();