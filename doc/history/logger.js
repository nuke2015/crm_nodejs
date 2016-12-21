// json日志模块
var fs = require('fs');
var myData = {
    name: 'test',
    version: '1.0'
}
var outputFilename = './runtime/log/mylog.json';
// 展开
// fs.appendFile(outputFilename, JSON.stringify(myData, null, 4), function(err) {
// 收缩
fs.appendFile(outputFilename, JSON.stringify(myData) + "\r\n", function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("JSON saved to " + outputFilename);
    }
});