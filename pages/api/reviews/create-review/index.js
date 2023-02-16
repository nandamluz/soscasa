import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const { name, contact, category, abstract, id } = req.body;
    const worker = await prisma.worker.create({
      select: { id: true, contact: true, category: true, abstract: true, id: true },
      data: { name, contact, category, abstract, id },
    });
    
    return res
      .status(200)
      .json({
        id: worker.id,
        name: worker.name,
        contact: worker.contact,
        category: worker.category,
        abstract: worker.abstract,
        token,
      });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Ocorreu um erro, tente novamente." });
  }
}