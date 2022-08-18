const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const { getUserid } = require('../utils');
const APP_SECRET = process.env.APP_SECRET;

async function signup(parent, args, context, info) {
    const password = await bcrypt.hash(args.password, 10)

    const user = await context.prisma.user.create({data: {...args, password}})

    const token = jwt.sign({userid: user.id }, APP_SECRET)

    return {
        token,
        user
    }
}

async function login (parent, args, context, info) {

    const user = await context.prisma.user.findUnique({where: {email: args.email}})

    if (!user){
        throw new Error ('no such user found')
    }

    const valid = await bcrypt.compare(args.password, user.password)
    if(!valid) {
        throw new Error ('Invalid password')
    }

    const token = jwt.sign({ userid: user.id}, APP_SECRET)

    return {
        token,
        user
    }
}

async function createPage(parent, args, context, info) {
    const { userid } = context;

    return await context.prisma.page.create({
        data: {
            title: args.title,
            imageURL: args.imageURL,
            createdBy: { connect: { id: userid } }
        }
    })
}

module.exports = {
    signup,
    login,
    createPage
}