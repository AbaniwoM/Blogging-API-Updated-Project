const postModel = require('../models/posts');
const logger = require("../logging/logger");

function getAllPosts(req, res) {
    postModel.find()
        .then(posts => {
            res.send(posts);
        })
        .catch(err => {
            logger.error(err)
            res.send(err);
        })
}

function getPostByID(req, res) {
    const id = req.params.id
    postModel.findById(id)
        .then(post => {
            res.status(200).send(post);
        })
        .catch(err => {
            logger.error(err)
            res.status(404).send(err);
        });
}

function addPost(req, res) {
    const post = req.body
    post.lastUpdatedAt = new Date() //set lastUpdateAT to current date
    postModel.create(post)
        .then(post => {
            res.status(201).send(post);
        })
        .catch(err => {
            logger.error(err)
            res.status(500).send(err);
        })
}

function updatePost(req, res) {
    const id = req.params.id
    const post = req.body
    post.lastUpdatedAt = new Date() // set lastUpdateAt to the current date
    postModel.findByIdAndUpdate(id, post, { new: true})
        .then(newPost => {
            res.status(200).send(newPost);
        })
        .catch(err => {
            logger.error(err);
            res.status(500).send(err);
        })
}

function deletePostByID(req, res) {
    const id = req.params.id
    postModel.findByIdAndRemove(id)
        .then(post => {
            res.status(200).send(post);
        })
        .catch(err => {
            logger.error(err)
            res.status(500).send(err);
        })
}

module.exports = {
    getAllPosts,
    getPostByID,
    addPost,
    updatePost,deletePostByID
}