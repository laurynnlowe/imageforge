const createdBy = (parent, args, context) =>  {
    return context.prisma.page.findUnique( {where: { id: parent.id } }).createdBy()
}

module.exports = {
    createdBy,
}