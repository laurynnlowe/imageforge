const { ApolloServer, gql } = require('apollo-server');
const {
    ApolloServerPluginLandingPageGraphQLPlayground,
  } = require("apollo-server-core");
const { PrismaClient } = require('@prisma/client');
require('dotenv').config()
const { getUserid } = require('./utils');
const jwt = require('jsonwebtoken');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Page = require('./resolvers/Page')
const prisma = new PrismaClient()


const resolvers = {
    Query,
    Mutation,
    User,
    Page
}


const typeDefs = gql`
    type Page {
        id: ID!
        title: String
        imageURL: String
        createdBy: User
    }

    type AuthPayLoad {
        token: String   
        user: User
    }

    type User {
        id: ID!
        name: String!
        email: String!
        pages: [Page!]!
    }

    type Query {
        pages: [Page]
    }

    type Mutation {
        createPage(title: String!, imageURL: String!): Page!
        signup(email: String!, password: String!, name: String!): AuthPayLoad
        login(email: String!, password:String!): AuthPayLoad
    }
`
// let pages = [
//     {
//         id: 13,
//         imageURL: '',
//         title: 'Test'
//     }
// ]


// const resolvers = {
//     Query: {
//         pages: async (parent, args, context) => {
//             return context.prisma.page.findMany()
//         }
//     },
//     Mutation: {
//         createPage: (parent, args, context, info) => {
//             const newPage = context.prisma.page.create({
//                 data: {
//                     title: args.title,
//                     imageURL: args.imageURL,
//                 }
//             })
//             return newPage
//         }
//     }
// }

const {ApolloServerPluginLandingPageLocalDefault} = require("apollo-server-core");

const server = new ApolloServer({
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    typeDefs,
    resolvers,
    context: ( { req} ) => {
        return {
            ...req,
            prisma,
            userid:
                req && req.headers.authorization
                    ? getUserid(req) 
                    : null
        }
    },
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true })
    ],
});

server.listen().then(( { url }) => {
    console.log( ` image forge server ready at ${url}`)
})