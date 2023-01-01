const express = require('express');
const { AddPostValidationMW, UpdatePostValidationMW } = require("../validators/post_validator");
const postController = require("../controllers/post_controller");

const postRouter = express.Router();

//Get all posts
postRouter.get('/', postController.getAllPosts);

//Get post by id
postRouter.get('/:id', postController.getPostByID);

//create post
postRouter.post('/', AddPostValidationMW, postController.addPost);

//Find post by id and update
postRouter.put('/:id', UpdatePostValidationMW, postController.updatePost);

//Find post by id and delete
postRouter.delete('/:id', postController.deletePostByID);

module.exports = postRouter;