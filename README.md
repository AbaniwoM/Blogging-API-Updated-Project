## API STRUCTURE (Blogging API v1)


* GET / (unprotected) ===> Home route to display Blog home content.
* GET /login (protected) ===> Authenticate new user with JWT (Use of SSO to be updated).
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
* JWT

## To start the server
- run `npm run dev`

## Hosted link 
- https://elated-sweatpants-bear.cyclic.app/


## USER ROUTE

## Register User
- Route: /api/v1/users/register
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
- Route: /api/v1/users/login
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

## POST ROUTE

## Home Request
- Route: /
- Method: GET

## Get All Posts
- Route: /api/v1/posts
- Method: GET
- Header
    - Content-Type: application/json
    - auth-token: (token given) 
    
`Note: token is being updated after 1hr`

## Add a Post
- Route: /api/v1/posts
- Method: POST
- Header
    - Content-Type: application/json
    - auth-token: (token given) 
    
`Note: token is being updated after 1hr`
- Body:
```
{
  "title": "Chemicals",
  "description": "Study of CHEM properties of matter and",
  "author": "Bristeny Kayi",
  "body": "structure of chems, objects, props, maintenance",
  "year": 2022
}
```
 
## Update Post by ID
- Route: /api/v1/posts/:id
- Method: PUT
- Header
    - Content-Type: application/json
    - auth-token: (token given) 
    
`Note: token is being updated after 1hr`

## Get Post by ID
- Route: /api/v1/posts/:id
- Method: GET
- Header
    - Content-Type: application/json
    - auth-token: (token given) 
    
`Note: token is being updated after 1hr`

## Delete Post by ID
- Route: /api/v1/posts/:id
- Method: DELETE
- Header
    - Content-Type: application/json
    - auth-token: (token given) 
    
`Note: token is being updated after 1hr`

## Contributor
- Michael Abaniwo
