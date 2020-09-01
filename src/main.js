import { GraphQLServer/* , PubSub  */} from 'graphql-yoga'
import { PrismaClient } from '@prisma/client'/* Agregando prisma */

import Query from './resolvers/Query'
import Colegio from './resolvers/Colegio'
import Curso from './resolvers/Curso'
import Matricula from './resolvers/Matricula'
import Reforzamiento from './resolvers/Reforzamiento'
import Mutation from './resolvers/Mutation'
/* import Subscription from './resolvers/Subscription' */
/* import db from './db' */

/* const pubsub = new PubSub() */
const prisma = new PrismaClient()/* Instanciando prisma */

const resolvers = {
    Query,
    Colegio,
    Curso,
    Matricula,
    Reforzamiento,
    Mutation,
/*     Subscription */
}

const context = {
    /* db, */
    /* pubsub,Subscription */
    prisma,/* Conexión a db */
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {/* authentication */
        return {
            ...request,
            ...context,
        }
    }
})

server.start({port: 8000},({port})=>console.log('Server is running on localhost:' + port))