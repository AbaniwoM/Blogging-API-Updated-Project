## API STRUCTURE (Blogging API Project)


* GET / (unprotected) ===> Home route to display Blog home content.
* GET /login (unprotected) ===> Authenticate new user. Use SSO.
* GET /logout (unprotected) ===> Logout a user.

### Blog API (Post Routes)
* GET /api/v1/posts (protected) ===> Return all posts.
* POST /api/v1/posts (protected) ===> Add a post to the db.
* PUT /api/v1/posts/:id (protected) ===> Update a post.
* DELETE /api/v1/posts/:id (protected) ===> Delete post by ID.
* GET /api/v1/posts/:id (protected) ===> Get post by unique ID.

### Other Middlewares
* Rate Limiting
* Security Middleware
* Good Logging
* Validation

### Dependencies: 
* express 
* body-parser 
* nodemon 
* dotenv
* ejs
* joi

## To start the server
- run `npm run dev`

## Hosted link 
- 

## Register User
- Route: /register
- Method: POST
- Body:
```
{
  "firstName":"Joseph",
  "lastName":"Example",
  "email":"joeexample@gmail.com",
  "password":"joe123456"
}
```
(firstName and lastName should not be less than 6 characters)
- responses

Success
```
{
   message: 'Register successful'
   user: {
        "firstName":"Joseph",
        "lastName":"Example",
        "email":"joeexample@gmail.com",
        "password":"joe123456"
   }
}
```

## Login User
- Route: /login
- Method: POST
- Header
    - Content-Type: application/json
    - auth-token: (token given) 
- Body:
```
{
  "email":"joeexample@gmail.com",
  "password":"joe123456"
}
```
(login details must be same as registered details)
- responses

Success

`An authentication token will be given to you which you'll supply in the Header as you go on`

`Note: token is being updated after 1hr`

