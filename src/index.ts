import express, { Express } from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";

dotenv.config();

const app: Express = express();

/**
 * GraphQL endpoint
 */
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

/**
 * Example endpoint
 */
app.use("/api/v1/greeting", (req, res) => {
  res.json({ data: { greeting: "Hello TypeScript + GraphQL" } });
});

/**
 * Fire it up!
 */
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Web server listening on port ${PORT}`);
});
