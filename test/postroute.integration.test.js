const express = require("express");
const request = require("supertest");
const postRouter = require("../routes/posts_routes");
// const verify = require("../auth/verifyToken");

const app = express();

app.use(express.json());

app.use("/api/v1/posts", postRouter);



describe("Integration tests for the posts API", () => {
    
    it('GET /api/v1/posts - success - get all the posts ', async () => {
       const { body, statusCode } = await request(app).get("/api/v1/posts")

       expect(body).toEqual(
            expect.objectContaining({
                title: expect.any(String),
                description: expect.any(String),
                author: expect.any(String),
                body: expect.any(String),
                year: expect.any(Number),
            })
       )

       expect(statusCode).toBe(200);

       done()
    });

});

