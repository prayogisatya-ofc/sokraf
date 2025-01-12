'use client';

import React, { useEffect, useState } from "react";
import { deleteAdmin, getAllAdmins } from "../api/admins";
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

export default function Admins() {
	const [getAdmins, setAdmins] = useState({});
	const router = useRouter();

	async function fetchData() {
		setAdmins(await getAllAdmins());
	}

	useEffect(() => {
		fetchData();
	}, []);

	const handleDelete = async (id: number) => {
		if (confirm('Are you sure you want to delete this admin?')) {
			await deleteAdmin(id);
			fetchData();
		}
	}
	
	return (
		<div>
			<Breadcrumb aria-label="Default breadcrumb example" className="mt-5 mb-5">
				<BreadcrumbItem href="/panel" icon={HiHome}>
					<Link href="/panel">
						Dashboard
					</Link>
				</BreadcrumbItem>
				<BreadcrumbItem>Admins</BreadcrumbItem>
			</Breadcrumb>
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-xl font-medium">Admins</h2>
				<Button as={Link} href="/panel/admins/add" color="blue">
					<HiPlus className="mr-2 h-5 w-5" />
					Add Admin
				</Button>
			</div>
			<div className="shadow p-5 rounded">
				<div className="overflow-x-auto">
					<Table>
						<TableHead>
							<TableHeadCell>#</TableHeadCell>
							<TableHeadCell>Full Name</TableHeadCell>
							<TableHeadCell>Email</TableHeadCell>
							<TableHeadCell className="text-center">Action</TableHeadCell>
						</TableHead>
						<TableBody className="divide-y">
							{Object.values(getAdmins)?.map((admin: any, index: number) => (
								<TableRow key={admin.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
									<TableCell>{index + 1}</TableCell>
									<TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
										{admin.name}
									</TableCell>
									<TableCell>{admin.email}</TableCell>
									<TableCell>
										<div className="flex gap-1 justify-center">
											<Button as={Link} href={`/panel/admins/edit/${admin.id}`} color="blue" size="xs">
												<HiOutlinePencilAlt className="h-5 w-5" />
											</Button>
											<Button color="failure" size="xs" onClick={() => handleDelete(admin.id)}>
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