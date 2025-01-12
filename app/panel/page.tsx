'use client';

import React, { useEffect, useState } from "react";
import { getTotalAdmins, getTotalCategories, getTotalProducts } from "./api/dashboard";
import { useSession } from "next-auth/react";

export default function Dashboard() {
    const [admin, setAdmin] = useState(0);
    const [category, setCategory] = useState(0);
    const [product, setProduct] = useState(0);
    const { data: session } = useSession();

    const fetchAdmin = async () => {
        const totalAdmins = await getTotalAdmins();
        setAdmin(totalAdmins);
    }

    const fetchCategory = async () => {
        const totalCategories = await getTotalCategories();
        setCategory(totalCategories);
    }

    const fetchProduct = async () => {
        const totalProducts = await getTotalProducts();
        setProduct(totalProducts);
    }

    useEffect(() => {
        fetchAdmin();
        fetchCategory();
        fetchProduct();
    }, []);

    return (
        <div className="pt-2">
            <div className="text-center flex items-center flex-col mt-5 mb-10">
                <img src="/logo.svg" className="h-12 mb-3" alt="Sokraf Logo" />
                <h3 className="text-lg font-medium mb-3">Welcome, {session?.user?.name}</h3>
                <h1 className="text-5xl font-bold">SO<span className="text-primary-700">KRAF</span> PANEL</h1>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <div className="sm:col-span-1 col-span-3 p-4 rounded shadow">
                    <div className="text-2xl font-semibold mb-2">{product}</div>
                    <p className="mb-0 text-sm">Total Products</p>
                </div>
                <div className="sm:col-span-1 col-span-3 p-4 rounded shadow">
                    <div className="text-2xl font-semibold mb-2">{category}</div>
                    <p className="mb-0 text-sm">Total Categories</p>
                </div>
                <div className="sm:col-span-1 col-span-3 p-4 rounded shadow">
                    <div className="text-2xl font-semibold mb-2">{admin}</div>
                    <p className="mb-0 text-sm">Total Admins</p>
                </div>
            </div>
        </div>
    )
};