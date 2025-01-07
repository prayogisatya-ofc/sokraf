'use server';

import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';

const prisma = new PrismaClient();

export async function createCategory(name: string) {
    const slug = slugify(name, {lower: true});

    return prisma.category.create({
        data: {
            name,
            slug
        }
    });
}

export async function getAllCategories() {
    return prisma.category.findMany({
        orderBy: { id: 'desc' },
        include: { 
            _count: {
                select: { products: true }
            } 
        },
    })
}

export async function getCategoryById(id: number) {
    return prisma.category.findUnique({
        where: { id },
    })
}

export async function updateCategory(id: number, name: string) {
    const slug = slugify(name, {lower: true});

    return prisma.category.update({
        where: { id },
        data: {
            name,
            slug
        }
    });
}

export async function deleteCategory(id: number) {
    return prisma.category.delete({
        where: { id },
    });
}