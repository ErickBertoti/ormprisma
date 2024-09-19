import { PrismClient } from "@prisma/client"

const prisma = new PrismClient()

async function main(){

    const result = await prisma.courses.create({

        data: {
            name: "Curso grátis de viagens frustrantes",
            duration: 10,
            descricao: "O melhor curso para você perder o seu dinheiro"
        }
    })

    console.log(result)

  
}
