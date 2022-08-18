const pages =  (parent, args, context) => {
    return context.prisma.user.findUnique({where: { id: parent.id}})
}

module.exports = {
    pages
}