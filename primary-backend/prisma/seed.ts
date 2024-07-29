
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

async function main(){
      await prismaClient.availableTrigger.create({
        data:{
            id: "webhook",
            name: "Webhook",
            image: "https://a.slack-edge.com/80588/img/services/outgoing-webhook_512.png"
        }
      })

      await prismaClient.availableAction.create({
        data: {
            id: "send-sol",
            name: "Send Solana",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEVwqwbF9IuKkegPO3sshUgShx5JmzedlPg&s"
        }
      })

      await prismaClient.availableAction.create({
        data: {
            id: "email",
            name: "Send Email",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nd82eFk5SaBPRIeCpmwL7A4YSokA-kXSmw&s"
        }
      })
}

main();
