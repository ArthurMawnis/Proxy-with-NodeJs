const express = require("express");
const app = express();

const port = process.env.PORT;

app.listen(port, () => console.log(`listening on port ${port}`));

app.get("/", (req, res) => {
  res.send(`Request sent to port  ${port}`);
});
