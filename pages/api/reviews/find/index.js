import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const { name, contact, category, abstract, id } = req.body;
    const worker = await prisma.worker.findAll ({  
      select: { id: true, contact: true, category: true, abstract: true, id: true },
      data: { name, contact, category, abstract, id }
     });
    if (!worker)  {
      return res
      .status(400)
      .json({ message: "Ocorreu um erro, tente novamente." });
    }
    
  } catch (error) {
    console.error("error", error);
  
  }
}
