const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const serveStatic = require('serve-static');
const path = require('path')
app.prepare().then(() => {
  const server = express();
  server.use(serveStatic(path.resolve('./static'))); 
  server.get("/register", (req, res) => {
    return app.render(req, res, "/signin-up/register", req.query);
  });

  server.get("/products/:gender/:category", (req, res) => {
      console.log(req)
    return app.render(req, res, "/products/productListing", req.query);
  });

  server.get("/posts/:id", (req, res) => {
    return app.render(req, res, "/posts", { id: req.params.id });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});