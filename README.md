# Express - Exercise #1 - Routing, Routing, Routing...

Let's setup a simple API:

* Create a file server.js file in this folder
* Install express via `npm install express` (or short: npm i express)
* Setup an Express server and let it run on a port
* Provide a success message that the server started up
* Define an array with the DCI course modules at the top of the file:
    ['HTML/CSS', 'JavaScript', 'DOM', 'NodeJS', 'React', 'Data Server', 'Fullstack Server', 'Final Project']
* Setup two routes
    * Route /json: Send the whole array as JSON to the browser

Start the server on port 5000

Test the output of your /json route by visiting http://localhost:5000/json in your browser


## Outsourcing

Outsource your array with the course modules into a file data.js

Export the array from that file.

Import the array in your server.js file.

Restart the server and test, if everything still works in the browser!


## Bonus Task - Some JS Training :)

Create a route /text: 
* Send the list of course modules comma separated as a string back to the browser
    * output in the browser should be like that => HTML / CSS, JavaScript, DOM, ...
* Hint: The array method "join" might be helpful for that. Lookup W3C or MDN, in case you forgot about that one :)

Create another route /html: 
* Send the course entries as HTML list to the browser
    * Do so by converting the course modules array to an array of HTML strings 
        * e.g.: "React" should become `<li>React</li>`    
        * Use the map function for that
    * After conversion: Concatenate the li tags together to a string

Test the output of your /html route by visiting http://localhost:5000/html in your browser


## Bonus Task - We need to be bold in life...

Adapt the HTML output in route /html:

* The module "Data Server" should get printed with bold text in the browser (so within HTML b tags)