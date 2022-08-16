const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Page {
        title: String
        imageURL: String
    }

    type Query {
        pages: [Page]
    }
`

const pages = [
    {
        title: "test",
        imageURL: "https://res.cloudinary.com/dosbhyc5z/image/upload/v1660155665/robot2_caiy83.png"
    },
    {
        title: "my masterpeice",
        imageURL: "https://res.cloudinary.com/dosbhyc5z/image/upload/v1660155665/robot1_tmekru.png"
    }
]

const resolvers = {
    Query: {
        pages: () => pages,
    },
}

const {ApolloServerPluginLandingPageLocalDefault} = require("apollo-server-core");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true })
    ],
});

server.listen().then(( { url }) => {
    console.log( ` image forge server ready at ${url}`)
})