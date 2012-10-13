var xobj = new XMLHttpRequest();
xobj.overrideMimeType("application/json");
xobj.open('GET', 'test_data.json', true);
xobj.onreadystatechange = function () {
    if (xobj.readyState == 4) {
        var dt = new SeleniumRenderer(document);
        dt.items = JSON.parse(xobj.responseText);
        dt.render();
    }
};
xobj.send(null);
window.onload = function() { // overload window.onload in selenium.js
};