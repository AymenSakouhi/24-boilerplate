import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type QueryFunction = () => Promise<void>;

export const queryAndDisconnect = (queryFn: QueryFunction): void => {
  queryFn().catch((e: Error) => {
    console.error(e);
    prisma.$disconnect();
  });
};

export default prisma;
