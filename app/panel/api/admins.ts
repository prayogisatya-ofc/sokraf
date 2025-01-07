'use server';

import { PrismaClient } from '@prisma/client';
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

export async function createAdmin(name: string, email: string, password: string) {
    return prisma.admin.create({
        data: {
            name,
            email,
            password: await bcrypt.hashSync(password, 8)
        }
    });
}

export async function getAllAdmins() {
    return prisma.admin.findMany({
        orderBy: { id: 'desc' },
    })
}

export async function getAdminById(id: number) {
    return prisma.admin.findUnique({
        where: { id },
    })
}

export async function updateAdmin(id: number, name: string, email: string, password: string) {
    const data: { name: string, email: string, password?: string } = {
        name,
        email
    };

    if (password) {
        data.password = await bcrypt.hashSync(password, 8);
    }

    return prisma.admin.update({
        where: { id },
        data
    });
}

export async function deleteAdmin(id: number) {
    return prisma.admin.delete({
        where: { id },
    });
}