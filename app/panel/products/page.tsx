'use client';

import React, { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "../api/products";
import Link from "next/link"
import { useRouter } from 'next/navigation';
import {
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeadCell,
	TableRow,
} from "flowbite-react";
import { HiHome, HiOutlinePencilAlt, HiOutlineTrash, HiPlus  } from "react-icons/hi";

export default function Products() {
	const [getProducts, setProducts] = useState({});
	const router = useRouter();

	async function fetchData() {
		setProducts(await getAllProducts());
	}

	useEffect(() => {
		fetchData();
	}, []);

	const handleDelete = async (id: number) => {
		if (confirm('Are you sure you want to delete this product?')) {
			await deleteProduct(id);
			fetchData();
		}
	}

	function formatRupiah(angka: number): string {
		if (isNaN(angka)) {
			return '';
		}

		return 'Rp ' + angka.toLocaleString('id-ID');
	}
	
	return (
		<div>
			<Breadcrumb aria-label="Default breadcrumb example" className="mt-5 mb-5">
				<BreadcrumbItem href="/panel" icon={HiHome}>
					<Link href="/panel">
						Dashboard
					</Link>
				</BreadcrumbItem>
				<BreadcrumbItem>Products</BreadcrumbItem>
			</Breadcrumb>
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-xl font-medium">Products</h2>
				<Button as={Link} href="/panel/products/add" color="blue">
					<HiPlus className="mr-2 h-5 w-5" />
					Add Product
				</Button>
			</div>
			<div className="shadow p-5 rounded mb-10">
				<div className="overflow-x-auto">
					<Table>
						<TableHead>
							<TableHeadCell>#</TableHeadCell>
							<TableHeadCell>Product Name</TableHeadCell>
							<TableHeadCell>Category</TableHeadCell>
							<TableHeadCell>Price</TableHeadCell>
							<TableHeadCell>WhatsApp</TableHeadCell>
							<TableHeadCell className="text-center">Action</TableHeadCell>
						</TableHead>
						<TableBody className="divide-y">
							{Object.values(getProducts)?.map((product: any, index: number) => (
								<TableRow key={product.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
									<TableCell>{index + 1}</TableCell>
									<TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
										{product.name}
									</TableCell>
									<TableCell>{product.category.name}</TableCell>
									<TableCell>{formatRupiah(product.price)}</TableCell>
									<TableCell>+62{[product.whatsApp]}</TableCell>
									<TableCell>
										<div className="flex gap-1 justify-center">
											<Button as={Link} href={`/panel/products/edit/${product.id}`} color="blue" size="xs">
												<HiOutlinePencilAlt className="h-5 w-5" />
											</Button>
											<Button color="failure" size="xs" onClick={() => handleDelete(product.id)}>
												<HiOutlineTrash  className="h-5 w-5" />
											</Button>
										</div>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
		</div>
	)
};