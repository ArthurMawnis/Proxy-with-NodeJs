/**
 * @author Arthur Freitas
 *
 * Server that will receive request filtered by the proxy
 */

const express = require("express");
const app = express();

const port = process.env.PORT;

app.listen(port, () => console.log(`listening on port ${port}`));

app.get("/", (req, res) => {
  console.log("It's here!");
  res.send(`Request sent to port ${port}`);
});
