const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const { UserRouter } = require("../routes"); // Update the path as needed
require("dotenv").config();

const app = express();
app.use(express.json());
app.use("/users", UserRouter);

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("User API", () => {
  it("should create a new user", async () => {
    const response = await request(app)
      .post("/users")
      .send({ name: "John Doe", email: "johndoe@example.com" });

    expect(response.statusCode).toBe(201);
    expect(response.text).toBe("User created successfully");
  });

  it("should return user already exists if the user is already in the database", async () => {
    const response = await request(app)
      .post("/users")
      .send({ name: "John Doe", email: "johndoe@example.com" });

    expect(response.statusCode).toBe(200);
    expect(response.body).toBe("User already exists");
  });

  it("should return all users", async () => {
    const response = await request(app).get("/users");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
