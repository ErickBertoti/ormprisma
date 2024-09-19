import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

    const result = await prisma.courses.update({
        where: {
            id: '40d7eb15-a68a-4195-86ec-74e7efb65d6f'
        },
        data:{
            description: 'O pior curso de Node.js, mas você vai aprender!'
        }
    })
    console.log(result)
}

main()