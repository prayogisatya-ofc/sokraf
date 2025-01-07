'use client';

import { createCategory } from "../../api/categories";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"
import {
	Breadcrumb,
	BreadcrumbItem,
	Button,
    Label,
    TextInput,
} from "flowbite-react";
import { HiHome, HiArrowSmLeft, HiOutlineSave } from "react-icons/hi";

export default function AddCategory() {
    const [name, setName] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createCategory(name);
        router.push('/panel/categories');
    }

    return (
        <div>
            <Breadcrumb aria-label="Default breadcrumb example" className="mt-3 mb-5">
                <BreadcrumbItem href="/panel" icon={HiHome}>
                    <Link href="/panel">
                        Dashboard
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem href="/panel/categories">
                    <Link href="/panel/categories">
                        Categories
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>Add Admin</BreadcrumbItem>
            </Breadcrumb>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium">Add Category</h2>
                <Button as={Link} href="/panel/categories" color="blue">
                    <HiArrowSmLeft className="mr-2 h-5 w-5" />
                    Back
                </Button>
            </div>
            <div className="shadow p-5 rounded">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <div className="mb-2 block">
                            <Label value="Category Name" />
                        </div>
                        <TextInput type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <Button type="submit" color="blue">
                        <HiOutlineSave className="mr-2 h-5 w-5" />
                        Save
                    </Button>
                </form>
            </div>
        </div>
    )
};