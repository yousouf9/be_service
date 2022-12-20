import * as dotenv from 'dotenv'
dotenv.config()
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import {typeDefs} from './shared/src';
import resolvers  from './resolvers';

const MONGODB = process.env.DB_URL as string;


const app = express();
const httpServer = http.createServer(app);


const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

 server.start().then();

 app.use(
  cors(),
  bodyParser.json(),
  expressMiddleware(server),
);


console.log(`🚀 Server ready at http://localhost:4000`);

mongoose.connect(MONGODB)
    .then(() => {
        console.log("MongoDB Connected");
        return httpServer.listen({ port: 4000 });
    })
    .then((res) => {
        console.log(`Server running at ${res}`)
    });


