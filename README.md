26/09/25
Created the basics (server.js index.html and SQL table) with help from my code over the last couple of days.

next step is fetching the data in my main.js, creating a forEach Loop through each array object and and displaying it on the DOM.

I added my POST route to server.js so it can now recieve new submissions and add them to the SQL table

Added event listener for a submit event from the user which would be stringified so that the server can read it.

Tried to submit review to test... found out I got the review and comment swicthed around in my VS code POST route(I had Title, Comment, Rating, instead of Title, Rating, Comment). It is asking for integers second not comments and so text wont work.

28/09
Added a delete button for each of the reviews that will refresh the page once deleted.
Also added classList to each of the reviews so that they can be styled together easier.
