import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const getUser = async (req,res) =>{
    try {
        const response = await prisma.user.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

export const getUserById = async (req, res) => {
    try {
        const response = await prisma.user.findUnique({
            where : {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error})
    }
}

export const createUser = async (req, res) => {
    const { nAnggota, kAnggota, tLahir, temLahir} = req.body;
    try {
        const user = await prisma.user.create({
            data:{
                nAnggota: nAnggota,
                kAnggota: kAnggota,
                tLahir: tLahir,
                temLahir: temLahir
            }
        });
        res.status(201).json(user);
    } catch (error) {
        req.status(400).json({msg: error})
    }
}
export const updateUser = async (req, res) => {
    const { nAnggota, kAnggota, tLahir, temLahir} = req.body;
    try {
        const user = await prisma.user.update({
            where: {
                id: Number(req.params.id)
            },
            data:{
                nAnggota: nAnggota,
                kAnggota: kAnggota,
                tLahir: tLahir,
                temLahir: temLahir
            }
        });
        res.status(200).json(user);
    } catch (error) {
        req.status(400).json({msg: error})
    }
}
export const deleteUser = async (req, res) => {
    try {
        const user = await prisma.user.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(user);
    } catch (error) {
        req.status(400).json({msg: error})
    }
}