import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./src/App";

const app = express();

app.get("/", (req, res) => {
  const appHtml = ReactDOMServer.renderToString(<App />);

  res.send(`
<!DOCTYPE html>
<html>
  <head>
    <title>SSR Hydration</title>

    <script type="module">
      import RefreshRuntime from 'http://localhost:5173/@react-refresh'
      RefreshRuntime.injectIntoGlobalHook(window)
      window.$RefreshReg$ = () => {}
      window.$RefreshSig$ = () => (type) => type
      window.__vite_plugin_react_preamble_installed__ = true
    </script>

    <script type="module" src="http://localhost:5173/@vite/client"></script>

    <script type="module" src="http://localhost:5173/src/main.tsx"></script>
  </head>

  <body>
    <div id="root">${appHtml}</div>
  </body>
</html>
`);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});