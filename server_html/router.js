const httpStatus = require("http-status-codes");
const contentTypes = require("./contentTypes");
const utils = require('./utils');

   const routes = {
    "GET": {},
    "POST": {
    }
  };

  routes.GET = 'url';


  exports.handle = (req, res) => {
    console.log(req.method)
    try {
    routes[req.method][req.url](req, res);
    console.log(req.method, req.url , req.body)
  } catch (e) {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/error.html", res);
  }
  };
  exports.get = (url, action) => {
    routes["GET"][url] = action;
  };
  exports.post = (url, action) => {
    routes["POST"][url] = action;
};