•	A link to a deployed version of your application if available
There is a link to explore our project:
https://murmuring-everglades-78489.herokuapp.com/


•	Information on how to run and build the project, eg. if someone were to take over development
First, the developers have to download the npm package by npm install.
The project is connected to MongoDB, so the developers should have the MongoDB account and define the environment in the project called .env, which contain SECRET, PORT, MONGODB_URI.
SECRET: it can be any string word, which is used to protect the sensitive data 
PORT: it has to be the same PORT with the server PORT (in this project, we set 3001)
MONGODB_URI: it copies from connecting your application on the MongoDB website.
Once we finish those, the developers can type the two comments in the terminal to start the project.
1.	npm start 
the comment is to run the front-end side and display the website. The PORT is set on 3000
2.	npm run server
 the comment is to run the back-end side.
this script includes nodemon, which will atomically restart the server when the developers change the code.
the PORT is set on 3001, which is use the proxy server
3.	if the developers are first time run the project, they have to run the ingestdb.js by node server/ingestdb.js in the terminal to send the initialised data in the MongoDB, otherwise, the web will receive an empty array.
 


•	Information about any use of Continuous Integration you have implemented.
The concept of the project is basic on social media.

The addFriend function may be one of the attractive characteristics of this project. This function may send the friend request to friends. Then, when he/she accepts the friend requests, they can appreciate the privacy posts and leave comments. It also allows the users chat to with each other if they are friends. 

Another function may be permitting the users to post the image by the local device. This function may significantly influence the users’ willingness to submit the post with pictures. In addition, the application may allow the log-in users to modify the post. That is, the users can edit the context or change the picture for each post after the posts are published. It also allows the user to add the location or tag other people in the post. 

In terms of the home page, the website may allow the user to customize the interface. That is, the home page may be divided into various sections. Then, each section may allow the log-in user to display the posts sorted by different classify, such as post time, recently view or popular user.    


