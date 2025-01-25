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

export async function getProductBySlug(slug: string) {
    return await prisma.product.findUnique({
        where: { slug },
        include: {
            category: true
        },
    });
}