'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getTotalProducts() {
    return await prisma.product.count();
}

export async function getTotalAdmins() {
    return await prisma.admin.count();
}

export async function getTotalCategories() {
    return await prisma.category.count();
}