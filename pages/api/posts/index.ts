import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { body } = req.body;
    if (req.method != 'GET' && req.method != 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        if (req.method === 'GET') {
            const { userId } = req.query;
            let posts;
            if (userId && typeof userId === 'string') {
                posts = await prisma.post.findMany({
                    where: {
                        userId
                    },
                    include: {
                        user: true,
                        comments: true
                    },
                    orderBy: {
                        userId: 'desc'
                    }
                })
            } else {
                posts = await prisma.post.findMany({
                    include: {
                        user: true,
                        comments: true
                    },
                    orderBy: {
                        userId: 'desc'
                    }
                })
            }
            res.status(200).json(posts);
        } else { // POST method
            const { currentUser } = await serverAuth(req, res);
            const post = await prisma.post.create({
                data: {
                    userId: currentUser.id,
                    body: body
                }
            })
            return res.status(200).json(post);
        }
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Not signed in' });
    }
}