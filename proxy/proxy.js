/**
 * @author Arthur Freitas
 *
 * Balance requests over registered servers.
 */

const express = require("express");
const axios = require("axios");

const app = express();

app.listen("3003", () => console.log("listening on port 3003"));

var serverFlag;

/**
 * Server's addresses to be considered when hashing the requests.
 */
const registerServers = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002",
];

/**
 *  Get Route
 */
app.get("/", (req, res) => {
  const chosenServer = getNextServer();

  try {
    const response = doCall(chosenServer);
    res.send(`Sent to: ${chosenServer}`);
  } catch (error) {
    res.send(`Failed to contact server ${chosenServer}`);
  }
});

/**
 * Retrieve next address from Queue.
 *
 */
function getNextServer() {
  if (
    serverFlag == undefined ||
    serverFlag == null ||
    serverFlag >= registerServers.length
  ) {
    serverFlag = 0;
  }

  let server = registerServers[serverFlag];
  serverFlag++;

  return server;
}

/**
 * Do a get call to the chosen server.
 *
 * @param {string} url
 */
async function doCall(url) {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
