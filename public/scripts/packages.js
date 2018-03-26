function listPackages() {
    const serverUrl = '';
    
    // the following function is only available when exposed via JavaScript interface to the webView
    const packages = JsAndroid.callPackages();

    var request = new XMLHttpRequest();
    request.open('POST', `http://${serverUrl}/terminal/1234/status`, true);
    request.send(JSON.stringify(packages));
}

listPackages();