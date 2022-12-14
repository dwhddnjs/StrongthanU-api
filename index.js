const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/typeDefs");

require("dotenv").config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
  cors: {
    origin: "*",
  },
});

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("몽고디비랑 연결 되었습니다");
    return server.listen({ port: process.env.PORT || 4000 });
  })
  .then((res) => {
    console.log(`서버가 ${res.url}로 실행중입니다`);
  });
