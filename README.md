# Proxy with NodeJs

A reverse proxy that split requests into registered servers.
  

 ## Using it

There's 3 address registered by default: localhost on port 3000,3001 and 3002.
Proxy's default port is 3003.
At server.js's directory start the server passing the port as cmd parameter. 
Get requests to localhost:3003/ will be shared between the servers in queue.

Thats it