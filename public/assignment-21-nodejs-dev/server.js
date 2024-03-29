const express = require("express");
const mongoose = require("mongoose");
const postModel = require("./postSchema");
const userModel = require("./userSchema");
const cors = require("cors");
// we imported express and set up a new express
// instance const app = express().
const app = express();
const port = 5000;
// allow body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const DB_URI_habib =
  "mongodb+srv://admin:admin123@cluster0.ohkm0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const DB_URI =
  "mongodb+srv://nodejs-prac:nodejs-prac@cluster0.gqhek.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/registration", (request, response) => {
  try {
    const body = request.body;
    userModel.findOne({ email: body.email }, (error, user) => {
      if (error) {
        throw error;
      }
      if (user) {
        response.send("Email Already exist");
      } else {
        userModel.create(body, (error, data) => {
          if (error) {
            response.send(error.message);
          } else {
            response.send("Account Created Successfully");
          }
        });
      }
    });
  } catch (error) {
    response.send(`Got an error `, error.message);
  }
});

app.post("/login", (request, response) => {
  try {
    const body = request.body;
    userModel.findOne({ email: body.email }, (error, user) => {
      if (error) {
        throw error;
      }
      if (user) {
        response.send(user);
      }
      if (!user) {
        response.send(`Account not found ${body.email}`);
      }
    });
  } catch (error) {
    response.send(`Got an error `, error.message);
  }
});

app.post("/create", (request, response) => {
  try {
    const body = request.body;
    postModel.create(body, (error, data) => {
      if (error) {
        throw error;
      } else {
        console.log(data);
        response.send("Create post successfully");
      }
    });
  } catch (error) {
    response.send(`Got an error `, error.message);
  }
});

app.get("/posts", (request, response) => {
  try {
    const { title } = request.headers;
    const query = {};
    if (title) {
      query.title = title;
    }
    postModel.find(query, (error, data) => {
      if (error) {
        throw error;
      } else {
        response.send(JSON.stringify(data));
      }
    });
  } catch (error) {
    response.send(`Got an error during get posts `, error.message);
  }
});

app.get("/getapost", (request, response) => {
  try {
    const { title } = request.headers;
    const query = {
      title: title,
    };
    if (query.title) {
      postModel.findOne(query, (error, data) => {
        if (error) {
          throw error;
        } else {
          response.send(JSON.stringify(data));
        }
      });
    } else {
      response.send(`Filed missing `);
    }
  } catch (error) {
    response.send(`Got an error during get a post `, error.message);
  }
});

mongoose.connection.on("connected", () => console.log("mongoose connected"));
mongoose.connection.on("error", (error) =>
  console.log(`mongoose error ${error.message}`)
);

app.listen(port, () =>
  console.log(`Your server is running on localhost:${port}`)
);
