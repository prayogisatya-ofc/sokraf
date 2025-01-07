'use client';

import React, { useEffect, useState } from "react";
import { deleteCategory, getAllCategories } from "../api/categories";
import Link from "next/link"
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
	Badge 
} from "flowbite-react";
import { HiHome, HiOutlinePencilAlt, HiOutlineTrash, HiPlus  } from "react-icons/hi";

export default function Categories() {
    // State untuk menampung data categories
	const [getCategories, setCategories] = useState({});

    // Fungsi untuk mengambil data categories
	async function fetchData() {
		setCategories(await getAllCategories());
	}

    // Memanggil fungsi fetchData
	useEffect(() => {
		fetchData();
	}, []);

    // Fungsi untuk menghapus data categories
	const handleDelete = async (id: number) => {
		if (confirm('Are you sure you want to delete this category?')) {
			await deleteCategory(id);
			fetchData();
		}
	}
	return (
		<div>
			<Breadcrumb aria-label="Default breadcrumb example" className="mt-3 mb-5">
				<BreadcrumbItem href="/panel" icon={HiHome}>
					<Link href="/panel">
						Dashboard
					</Link>
				</BreadcrumbItem>
				<BreadcrumbItem>Categories</BreadcrumbItem>
			</Breadcrumb>
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-xl font-medium">Categories</h2>
				<Button as={Link} href="/panel/categories/add" color="blue">
					<HiPlus className="mr-2 h-5 w-5" />
					Add Category
				</Button>
			</div>
			<div className="shadow p-5 rounded">
				<div className="overflow-x-auto">
					<Table>
						<TableHead>
							<TableHeadCell>#</TableHeadCell>
							<TableHeadCell>Category Name</TableHeadCell>
							<TableHeadCell>Total Products</TableHeadCell>
							<TableHeadCell className="text-center">Action</TableHeadCell>
						</TableHead>
						<TableBody className="divide-y">
							{Object.values(getCategories)?.map((category: any, index: number) => (
								<TableRow key={category.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
									<TableCell>{index + 1}</TableCell>
									<TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
										{category.name}
									</TableCell>
									<TableCell>
										<Badge className="inline" color="indigo">{category._count.products} Products</Badge>
									</TableCell>
									<TableCell>
										<div className="flex gap-1 justify-center">
											<Button as={Link} href={`/panel/categories/edit/${category.id}`} color="blue" size="xs">
												<HiOutlinePencilAlt className="h-5 w-5" />
											</Button>
											<Button color="failure" size="xs" onClick={() => handleDelete(category.id)}>
												<HiOutlineTrash  className="h-5 w-5" />
											</Button>
										</div>
									</TableCell>
								</TableRow>
							))}

                            {Object.values(getCategories)?.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center">
                                        No data found
                                    </TableCell>
                                </TableRow>
                            )}
						</TableBody>
					</Table>
				</div>
			</div>
		</div>
	)
};