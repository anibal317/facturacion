import { PrismaClient } from "@prisma/client";

const databaseUrl = process.env.MODE === "local"
    ? process.env.DATABASE_URL
    : process.env.DATABASE_URL_EXTERNAL;

export const prisma = new PrismaClient({
    datasources: {
        db: {
            url: databaseUrl,
        },
    },
    log: ['query', 'info', 'warn', 'error'],
});