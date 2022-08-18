const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

async function main() {
    const allPages = await prisma.page.findMany()
    console.log(allPages)
}

main()
    .catch( e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })