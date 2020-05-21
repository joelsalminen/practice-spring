const express = require("express");
const chalk = require("chalk");
const bodyParser = require("body-parser");
const cors = require("cors");

const { port } = require("./config.js");
let _mockDB = require("./db.json");
const app = express();
app.use(cors());

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routeNames = Object.keys(_mockDB);

routeNames.forEach((routeName) => {
  app.get(`/api/${routeName}`, (req, res) => {
    res.send(_mockDB[routeName]);
  });

  app.post(`/api/${routeName}`, (req, res) => {
    const id = Math.max(..._mockDB[routeName].map((item) => item.id)) + 1;
    const newItem = { ...req.body, id };
    _mockDB = { ..._mockDB, [routeName]: [..._mockDB[routeName], newItem] };
    res.send(newItem);
  });

  app.put(`/api/${routeName}/:id`, (req, res) => {
    _mockDB = {
      ..._mockDB,
      [routeName]: _mockDB[routeName].map((item) => {
        /* eslint-disable-next-line eqeqeq*/
        if (item.id == req.params.id) {
          return { ...item, ...req.body, id: item.id };
        }
        return item;
      }),
    };

    /* eslint-disable-next-line eqeqeq*/
    const changedItem = _mockDB[routeName].find((i) => i.id == req.params.id);
    res.send(changedItem);
  });

  app.delete(`/api/${routeName}/:id`, (req, res) => {
    _mockDB = {
      ..._mockDB,
      [routeName]: _mockDB[routeName].filter(
        /* eslint-disable-next-line eqeqeq*/
        (item) => item._id == req.params.id
      ),
    };
    res.send([]);
  });

  console.info(
    "Route available:",
    chalk.cyan(`http://localhost:${port}/api/${routeName}`)
  );
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "jaakko" && password === "jokershep123") {
    res.send({ token: "3gsi363395dg93", expiresAt: 100000 });
  }
  res.status(400).send({ error: "Login failed" });
});

app.listen(port, () => {
  console.info(`Running on port ${port}`);
});
