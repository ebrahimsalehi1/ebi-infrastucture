const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    //console.log(req);  
    const url = req.url;
    const method = req.method;

    switch(url){
        case '/':
            res.setHeader('Content-Type','text/html');
            res.write('<html>');
            res.write('<head><title>This is a test</title></head>');
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Ok Click !!!</button></input></form></body>');
            res.write('</html>');
            res.end();
            break;
        case '/message':
            if(method === 'GET'){
                res.setHeader('Content-Type','text/html');
                res.write('<html>');
                res.write('<head><title>This is a test</title></head>');
                res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Ok Click !!!</button></input></form></body>');
                res.write('</html>');
                res.end();
            }
            else if(method === 'POST'){
                const body = [];
                req.on('data',(chunk)=>{
                    console.log(chunk);                    
                    body.push(chunk);
                });
                return req.on('end',()=>{

                    const parsedBody = Buffer.concat(body).toString();
                    console.log("parsedBody",parsedBody);
                    fs.writeFileSync('message.txt',parsedBody,err=>{
                        res.statusCode = 302;
                        res.setHeader('Location','/');
    
                        return res.end();
                    });
                });

                res.setHeader('Content-Type','text/html');
                res.write('<html>');
                res.write('<head><title>My First Page</title></head>');
                res.write('<body><h1>Post method </h1></body>');
                res.write('</html>');
                res.end();

            }
            break;
        default:

    }
});

server.listen(3000);
