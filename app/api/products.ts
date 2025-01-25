'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllProducts() {
    return await prisma.product.findMany({
        orderBy: { id: 'desc' },
        include: {
            category: true
        },
    });
}