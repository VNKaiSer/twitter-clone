import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt';
import prisma from '@/libs/prismadb';
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method != 'POST')
        return res.status(405).json({ message: 'Method not allowed' });
    try {
        const { email, username, name, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                email,
                userName: username,
                name,
                hashedPassword
            }
        })
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Not signed in' });
    }

}