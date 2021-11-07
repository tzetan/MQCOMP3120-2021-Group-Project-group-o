# COMP3120 Group Project (Group O)

## An outline of the application you were aiming to build, target users, data sources etc
### What is the main purpose of the application?

- Allow the log-in user to add post
- Allow the user to login (Authentication) 
- Allow the user to like posts
- Allow the user to add comments under posts
- Allow different users to login
- Allow the log-in user to have a profile picture
- Allow the log-in user to display user name under their post
- Allow the log-in user to delete their posts
 
### What is the target user group, how will they use it?

- Young adults (16-30)
- The young adults would like to post the pictures and share their emotions on social media. Therefore, the target audience for our application may be around 16-30 years old.
 
### What data sources (if any) will you use in the application? 

- MongoDB
 
- `.env` file should include:
 ```
SECRET
PORT
MONGODB_URI
 ```
> (Note: the application should contain the .env file, otherwise the application cannot connect to MongoDB)
 
### A target Minimum Viable Product outline

- Allow the user to add post
- Allow the user to login (Authentication) 
- Allow the user to add comments under posts
 
### Describe which features you will target in the MVP

Website has a home login page and the user should be able to initially login. Home page displays the posts titles and after logging in the user can add a post. The user can click on the post title and view the full post. And add comments under the posts.
 
### A description of what you have been able to implement in this MVP, use your milestones to highlight what you've achieved

- Sprint 1 - Week 9
    - Set-up of application
    - Start with a JSON file (not implementing MongoDB yet). 
    - Get github ready with base code. 
    - Set-up environment

This week we created a simple React project and discussed what kind of data should be contained in a JSON file. In terms of back-end code, there include app.js, api.js, server.js and middleware.js. We also added some server code like ingestdb.js and models, which helped us to easily connect the MongoDB database afterwards.

- Sprint 2 - Week 10
    - Create About Page and NavBar
    - Login function
    - View list of posts.
    - Set-up Backend

Our plan for this week is the user will see the short description on the home page. Then, when the user clicks on the posts button on the top of the navigation bar, there will show a list of posts and the URL path name will be changed. Furmore, the user can login to the page after they fill in the log-in form and submit it.

- Sprint 3 - Week 11
    - Add a post
    - Like posts 
    - Delete posts
    - Add comments under posts (individual post)
    - Start writing tests

The webpage includes more functions that allow the user to explore. The login-user can add posts, view and delete their own post. On the home page, there will show all posts and the user can increase the number of likes and leave a comment. In addition, we import the Skeleton, so the webpage will look more aesthetic.

- Sprint 4 - Week 12
    - Finalise and add extra features (different user login, refactor to store user info in MongoDB)
    - Show the user profile picture.
    - UI Upgrade - Frontend team
    - Add tests - Frontend and backend teams
    - Final fixes and deploy on Heroku - Backend Team

The user can login the webpage through Auth0 and the user profile picture and name will be shown on the top right corner. 
We also focused on the front-end and back-end testing, CSS code,  fixed the warning and error message and deployed the application on Heroku 
The link below can be access to our page
(https://murmuring-everglades-78489.herokuapp.com/)
 
 
## A guide to the project source code - where should we look for what you have done
The following are the key pages of the frontend application according to the [screenshots](https://github.com/MQCOMP3120-2021/group-web-project-group-o/tree/main/Screenshots) provided, and the elements of the backend code.

Frontend:
- **HomePage  (PostsHome.js,  about.js & TopPosts.js)** - The home page consists of a welcome page and a list of posts from various users. The home page also shows the top five posts according to the amount of likes a post received. Users can like other posts created by other users
- **LoginPage  (Auth0)** - The application implemented Auth0 where users could login, register and logout of their accounts. Once the user logs in, they are redirected to the home page
- **MyPostsPage  (PostsList.js)** - The MyPosts page shows the posts created by the user currently logged in. Users are able to delete their posts
- **SinglePostPage  (SinglePost.js)** - This page shows the individual post according to the individual link clicked by users. The comments by other users are shown in the individual post and users can add share their thoughts and ideas by adding a new comment
- **AddPostsPage  (add_post.js & addedPost.js)** - Users are able to create a new post to share with others, the users can add a title, the content of their posts, and a picture 
- **Navigation Bar (nav.js)** - Various links of pages allow users to navigate between these pages using `react-route-dom`
 
Backend (api.js): 
- **checkJwt** - checks the access token of user logged in through Auth0
- **GET /api/posts** - returns a list of posts
- **GET /api/posts/:id** - returns the record for the post with the given **id**
- **POST /api/posts** - adds a new post to the collection
- **PUT /api/poems/:id** - updates posts with new likes or comments with the given **id**
- **DELETE /api/posts** - deletes a post from the collection of posts
 
## A summary of what your next steps would be if you were to continue the project
- We would like to improve our overall UI of the application and to improve our CSS designs for better appealing to users
- Add more tests to the testing section of the application
- Add User Profile Page
- Add Friends/Followers functionality where users can add friends or decide to follow another user
- Add user/posts recommendation system where the application would recommend a certain user according to the users they follow or the posts they liked
 
## A summary of the main roles and contributions of each team member and how you managed interaction and communication through the project
- Priya and Andy’s roles were mainly to build the front end side of the application which includes the different pages (Home Page, SinglePost Page, MyPosts Page, etc. As seen in the screenshots), the testing of our application, and the overall CSS designs 
- Brian and Tze’s roles were to implement the backend server and how the frontend server communicates with the backend. We were able to implement a MongoDB database cluster to store various posts and user information. - Furthermore, we utilised Auth0’s authentication system to support the login, registration and logout functionality
- Group O were able to communicate with each other through the use of Facebook Messenger, Discord and emails
