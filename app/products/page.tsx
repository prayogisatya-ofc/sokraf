'use client';

import Link from "next/link";

export default function Products() {
    return (
        <div>
            <section className="antialiased py-5">
                <div className="mx-auto max-w-screen-xl">
                    <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
                        <h2 className="mt-3 text-xl font-medium sm:text-2xl">Products</h2>
                    </div>
                    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                            <div className="h-56 w-full">
                                <Link href=''>
                                    <img className="mx-auto h-full" src='' alt="" />
                                </Link>
                            </div>

                            <div className="pt-6">
                                <Link href='' className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">Lukisan Antik</Link>

                                <ul className="mt-2 flex items-center gap-4">
                                    <li className="flex items-center gap-2">
                                        <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" 
                                            height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 
                                                1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z"/>
                                        </svg>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Lukisan</p>
                                    </li>
                                </ul>

                                <div className="mt-4 flex items-center justify-between gap-4">
                                    <p className="text-xl font-bold leading-tight">Rp 100.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}