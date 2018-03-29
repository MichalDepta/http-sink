# HTTP sink #

This is a simple http request logger which will print incoming requests to the console and respond with a 200 HTTP status.
Additionally it serves some static files used to demonstrate capabilities of connecting to this server from external apps (or browser).

### Running ###

* cd to the project root directory
* install dependencies if not installed previously: ```npm install```
* start the server: ```npm start``` - by default the server will listen on port 3000, this can be changed using the PORT environment variable

Make sure the firewall rules are set up to allow incoming connections to port 3000 (by default) if you plan to connect from a remote machine.

### Adding new static files ###

* Add a new script file in the /public subdirectory
* Restart the server
