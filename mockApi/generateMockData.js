/* A script that generates mock data for local development. */

const jsf = require("json-schema-faker");
const schema = require("./mockDataSchema");
const fs = require("fs");
const chalk = require("chalk");
const faker = require("faker");
const Chance = require("chance");

jsf.extend("faker", () => faker);
jsf.extend("chance", () => new Chance());

jsf.option({
  resolveJsonPath: true,
  alwaysFakeOptionals: true,
});

const json = JSON.stringify(jsf.generate(schema));

fs.writeFile("./mockApi/db.json", json, (err) => {
  if (err) {
    return console.info(chalk.red(err));
  }
  console.info(chalk.green("Mock data generated."));
});
