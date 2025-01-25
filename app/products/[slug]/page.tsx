'use client';

import { Button } from "flowbite-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getProductBySlug } from "@/app/api/products";

interface Product {
    id: number;
    name: string;
    slug: string;
    price: number;
    description: string;
    image: string;
    whatsApp: string;
    createdAt: Date;
    category: {
        id: number;
        name: string;
        slug: string;
    };
    categoryId: number;
}

export default function DetailProduct() {
    const { slug } = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    const fetchProduct = async () => {
        const product = await getProductBySlug(String(slug));
        setProduct(product);
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    function formatRupiah(angka: number): string {
		if (isNaN(angka)) {
			return '';
		}
		return 'Rp ' + angka.toLocaleString('id-ID');
	}

    return (
        <div>
            {product ? (
                <section className="py-4 md:py-6 antialiased">
                    <div className="max-w-screen-xl mx-auto">
                        <Button as={Link} href="/products" color="light" className="inline-block mb-4">
                            <svg className="w-5 h-5 me-2 -ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 8-4 4 4 4"/>
                            </svg>
                            Back
                        </Button>
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                                <img className="w-full" src={`/${product.image}`} alt="" />
                            </div>

                            <div className="mt-6 sm:mt-8 lg:mt-0">
                                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                                    {product.name}
                                </h1>
                                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                    <p className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                                        {formatRupiah(product.price)}
                                    </p>
                                </div>

                                <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                                    <div className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border 
                                        border-gray-200 
                                        hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 
                                        dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                        <svg className="w-5 h-5 -ms-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 
                                                0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z" />
                                        </svg>
                                        {product.category.name}
                                    </div>

                                    <Link
                                        href={`https://wa.me/62${product.whatsApp}&text=Halo,%20saya%20ingin%20memesan%20${product.name}`}
                                        className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 
                                            text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none 
                                            dark:focus:ring-primary-800 flex items-center justify-center"
                                        role="button">
                                        <svg
                                            className="w-5 h-5 -ms-2 me-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 24 24">
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                                            />
                                        </svg>

                                        Buy Product
                                    </Link>
                                </div>

                                <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                                <p className="mb-6 text-gray-500 dark:text-gray-400">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}