import { User } from "./../../node_modules/.prisma/client/index.d";
import { Request, Response } from "express";
import prismaClient, { queryAndDisconnect } from "../db/db";

export const getAllUsers = async (req: Request, res: Response) => {
  const Users = queryAndDisconnect(async () => {
    const Users = await prismaClient.user.findMany();
    console.log(Users);
    res.json({ ...Users });
  });
};
