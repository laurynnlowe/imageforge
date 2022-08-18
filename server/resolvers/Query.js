const pages = (parent, args, context) => {
            return context.prisma.page.findMany()
        }

module.exports = {
    pages,
};
