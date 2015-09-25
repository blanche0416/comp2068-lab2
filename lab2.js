var http = require('http');

//require node's url module to parse the url'squreystring
var url = require('url');

//create the serve to run the page
http.createServer(function (req, res) {

    //get the squreystring and parse the subtotal at a float value
    var qs = url.parse(req.url, true).query;
    var method = qs.method;
    var x = parseFloat(qs.x);
    var y = parseFloat(qs.y);
    var methodSign;

    //calculate the answer
    var calculate = function (method, x, y) {
        if (method === 'add') {
            return x + y;
        }
        else if (method === 'subtract') {
            return x - y;
        }
        else if (method === 'multiply') {
            return x * y;
        }
        else if (method === 'divide') {
            return x / y;
        }
        else {
            return 'error! method has to be add, subtract, multiply or divide';
        }
    }

    //change method name to method sign
    if (method === 'add') {
        methodSign = '+';
    }
    else if (method === 'subtract') {
        methodSign = '-';
    }
    else if (method === 'multiply') {
        methodSign = '*';
    }
    else if (method === 'divide') {
        methodSign = '/';
    }

    //output the value
    res.write('<h1>Simple Calculator</h1>' + x + " " + methodSign + " " + y + ' = ' + calculate(method, x, y));
    res.end();

}).listen(3000);
//the site will loan at:
//http://localhost:3000/lab2.js?method=add&x=16&y=4
//http://localhost:3000/lab2.js?method=subtract&x=16&y=4
//http://localhost:3000/lab2.js?method=multiply&x=16&y=4
//http://localhost:3000/lab2.js?method=divide&x=16&y=4