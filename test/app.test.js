import supertest from 'supertest';
import router from '../auth/auth';

describe("POST /api/users/", () => {

    describe("given a firstName, lastName, email and password", () => {
        // should save the firstName, lastName, email and password to the database
        // should respond with a json object containing the user id
        // should respond with a 200 status code
        test("should respond with a 200 status code", async () => {
            const response = await request(router).post("/api/users/").send({
               firstName: "firstName",
               lastName: "lastName",
               email: "email",
               password: "password" 
            });
            expect(response.statusCode).toBe(200);
        })
        // should specify json in the content type header
    });


})