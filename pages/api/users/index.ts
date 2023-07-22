import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/libs/prismadb';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // check if the method is GET
    if (req.method != 'GET') {
        res.status(405).json({ message: 'Method not allowed' });
    }

    // method is GET
    try {
        const users = await prisma.user.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        res.status(200).json(users);

    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Not signed in' });
    }
}