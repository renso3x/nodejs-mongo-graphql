require("dotenv").config();

const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");

const schema = require("./app/graphql");
const isAuth = require("./app/middleware/is-auth");

const app = express();

app.use(cors());
app.use(isAuth);
app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Connecting to port ${PORT}`);
});
