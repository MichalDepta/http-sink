function listPackages() {
    const serverUrl = '';
    const packages = JsAndroid.callPackages();

    var request = new XMLHttpRequest();
    request.open('POST', `http://${serverUrl}/terminal/1234/status`, true);
    request.send(JSON.stringify(packages));
}

listPackages();