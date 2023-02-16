function httpGet(theUrl) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", theUrl, false);
    xmlHttpReq.send(null);
    return xmlHttpReq.responseText;
}

function makeArray(value) {
    return response.map(function(a) {
        return {[value]: a[value]};
    });
}

let response = JSON.parse(httpGet("/github"));
let html = "";

let names = makeArray("name");
let descriptions = makeArray("description");
let full_names = makeArray("full_name");
let html_urls = makeArray("html_url");
let stargazers_counts = makeArray("stargazers_count");
let watchers = makeArray("watchers");

console.log(response);