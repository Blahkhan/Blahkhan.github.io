$.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
    WriteToFile(data)
})

function WriteToFile(info) {
    var fs = require('fs');
    fs.writeFile("/data/test/txt", info, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}); 
}