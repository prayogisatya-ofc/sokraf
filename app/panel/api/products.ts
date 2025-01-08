'use server';

import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';
import { v4 as uuidv4 } from 'uuid';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { unlink } from 'fs/promises';

const prisma = new PrismaClient();

export async function createProduct(data: {
    name: string;
    description: string;
    price: number;
    categoryId: number;
    whatsApp: string;
    image: File;
}) {
    const uniqueName = `${uuidv4()}-${data.image.name}`;
    const imagePath = join(process.cwd(), "public", "images", uniqueName);
    const arrayBuffer = await data.image.arrayBuffer();
    await writeFileSync(imagePath, Buffer.from(arrayBuffer));
    
    return prisma.product.create({
        data: {
            name: data.name,
            slug: slugify(data.name, { lower: true }),
            description: data.description,
            price: data.price,
            categoryId: data.categoryId,
            whatsApp: data.whatsApp,
            image: `images/${uniqueName}`,
        },
    });
}

export async function getAllProducts() {
    return prisma.product.findMany({
        orderBy: { id: 'desc' },
        include: {
            category: {
                select: { name: true }
            }
        },
    })
}

export async function getProductById(id: number) {
    return prisma.product.findUnique({
        where: { id },
        include: {
            category: true
        },
    })
}

export async function updateProduct(id: number, data: {
    name: string,
    description: string,
    price: number,
    categoryId: number,
    whatsApp: string,
}) {
    const slug = slugify(data.name, { lower: true });

    return prisma.product.update({
        where: { id },
        data: {
            name: data.name,
            slug,
            description: data.description,
            price: data.price,
            categoryId: data.categoryId,
            whatsApp: data.whatsApp
        }
    });
}

export async function deleteProduct(id: number) {
    const product = await prisma.product.findUnique({
        where: { id },
        select: { image: true }
    });

    if (!product) {
        throw new Error('Product not found');
    }

    const imagePath = join(process.cwd(), 'public', product.image);

    try {
        await unlink(imagePath);

        await prisma.product.delete({
            where: { id }
        })
    } catch (error) {
        console.error('Error deleting product or image', error);
        throw new Error('Failed to delete product and image');
    }
}