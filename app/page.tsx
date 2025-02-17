'use client';

import { Button } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProducts } from "./api/home";

export default function Home() {
	const [products, setProducts] = useState({});

	const fetchProducts = async () => {
		const products = await getProducts();
		setProducts(products);
	}

	useEffect(() => {
		fetchProducts();
	}, []);

	function formatRupiah(angka: number): string {
		if (isNaN(angka)) {
			return '';
		}
		return 'Rp ' + angka.toLocaleString('id-ID');
	}

	return (
		<div>
			<section className="bg-primary-100 rounded-2xl mt-5">
				<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
					<Link href="/" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-white rounded-full hover:bg-gray-100" role="alert">
						<span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">
              				Sokraf is here for your creations
            			</span>
						<svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              				<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            			</svg>
					</Link>
					<h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
            			Showcase Your Creativity on So<span className="text-primary-700">kraf</span>
          			</h1>
					<p className="mb-8 text-md font-normal text-gray-500 lg:text-lg sm:px-16 xl:px-48 dark:text-gray-400">
            			Explore a world of art and craftsmanship, find fresh inspiration, or promote your work to a global audience of creative enthusiasts.
          			</p>
          			<div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
						<Button href="#products" color="blue" className="hover:bg-primary-800">
							Get started
							<svg className="ml-2 -mr-1 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
								<path fill-rule="evenodd" 
								d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 
								0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 
								0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" 
								clip-rule="evenodd" />
							</svg>
						</Button>
						<Button href="https://wa.me/6282269789818?text=Halo+min+saya+mau+jual+karya+di+Sokraf" target="_blank" color="light" className="hover:bg-gray-200">
							<svg className="mr-2 -ml-1 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
							</svg>
							Show Yours
						</Button>
					</div>
				</div>
			</section>
			<section className="py-8 antialiased md:py-10" id="products">
				<div className="mx-auto max-w-screen-xl">
					<div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
						<div>
							<h2 className="mt-3 text-xl font-medium sm:text-2xl">Recent Products</h2>
						</div>
					</div>
					<div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
						{Object.values(products)?.map((product: any) => (
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
												<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 
													1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z"/>
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
					<div className="text-center flex justify-center">
						<Button as={Link} href="/products" className="hover:bg-gray-100" color="light">Show more</Button>
					</div>
				</div>
			</section>
		</div>
	);
}