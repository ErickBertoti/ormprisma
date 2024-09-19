import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

    const result = await prisma.courses.delete({
        where: {
            id: '40d7eb15-a68a-4195-86ec-74e7efb65d6f'
        }
    })
    console.log(result)
}
 
main()