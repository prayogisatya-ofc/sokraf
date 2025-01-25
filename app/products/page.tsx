'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllProducts } from "../api/products";
import { Select, TextInput } from "flowbite-react";
import { getAllCategories } from "../panel/api/categories";

export default function Products() {
    const [products, setProducts] = useState({});
    const [categories, setCategories] = useState({});
    const [searchKeyword, setSearchKeyword] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredProducts, setFilteredProducts] = useState({});

    const fetchProducts = async () => {
        const products = await getAllProducts();
        setProducts(products);
    }

    const fetchCategories = async () => {
        const categories = await getAllCategories();
        setCategories(categories);
    }

    const filterProducts = () => {
        let tempProducts = Object.values(products);

        if (selectedCategory) {
            tempProducts = tempProducts.filter(
                (product: any) => product.categoryId === Number(selectedCategory)
            );
        }

        if (searchKeyword) {
            tempProducts = tempProducts.filter(
                (product: any) => product.name.toLowerCase().includes(searchKeyword.toLowerCase())
            );
        }

        setFilteredProducts(tempProducts);
    }

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    useEffect(() => {
        filterProducts();
    }, [products, selectedCategory, searchKeyword]);

    function formatRupiah(angka: number): string {
        if (isNaN(angka)) {
            return '';
        }
        return 'Rp ' + angka.toLocaleString('id-ID');
    }

    return (
        <div>
            <section className="antialiased py-5">
                <div className="mx-auto max-w-screen-xl">
                    <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
                        <h2 className="mt-3 text-xl font-medium sm:text-2xl">Products</h2>
                        <form>
                            <div className="flex text-nowrap gap-3">
                                <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                                    <option value="">All categories</option>
                                    {Object.values(categories)?.map((category: any) => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </Select>
                                <TextInput type="search" placeholder="Search products..." value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
                            </div>
                        </form>
                    </div>
                    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                        {Object.values(filteredProducts)?.map((product: any) => (
                            <div key={product.id} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <div className="h-56 w-full">
                                    <Link href={`/products/${product.slug}`}>
                                        <img className="mx-auto h-full" src={`${product.image}`} alt="" />
                                    </Link>
                                </div>

                                <div className="pt-6">
                                    <Link href={`/products/${product.slug}`} className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{product.name}</Link>

                                    <ul className="mt-2 flex items-center gap-4">
                                        <li className="flex items-center gap-2">
                                            <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 
                                                0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z"/>
                                            </svg>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{product.category.name}</p>
                                        </li>
                                    </ul>

                                    <div className="mt-4 flex items-center justify-between gap-4">
                                        <p className="text-xl font-bold leading-tight">{formatRupiah(product.price)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}