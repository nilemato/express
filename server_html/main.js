const port =  3000;
const http = require('http');
const httpStatus = require('http-status-codes');
const router = require('./router');
const contentTypes = require('./contentTypes')
const utils = require('./utils')

  router.get("./index.html", (req, res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html );
    utils.getFile('views/index.html')  })  

  router.get("/contact.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/contact.html", res);
 });
 router.post("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/thanks.html", res);
 });

 http.createServer(router.handle).listen(port); console.log(`The server is listening on
➥ port number: ${port}`);

exports.get = (url, action) => {
    routes["GET"][url] = action;
  };