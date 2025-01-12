'use client';

import { createAdmin } from "../../api/admins";
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

export default function AddAdmin() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        } else {
            await createAdmin(name, email, password);
            router.push('/panel/admins');
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
                <BreadcrumbItem href="/panel/admins">
                    <Link href="/panel/admins">
                        Admins
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>Add Admin</BreadcrumbItem>
            </Breadcrumb>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium">Add Admin</h2>
                <Button as={Link} href="/panel/admins" color="blue">
                    <HiArrowSmLeft className="mr-2 h-5 w-5" />
                    Back
                </Button>
            </div>
            <div className="shadow p-5 rounded">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-3">
                            <div className="mb-2 block">
                                <Label value="Full Name" />
                            </div>
                            <TextInput type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <div className="mb-2 block">
                                <Label value="Email" />
                            </div>
                            <TextInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-3">
                            <div className="mb-2 block">
                                <Label value="Password" />
                            </div>
                            <TextInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <div className="mb-2 block">
                                <Label value="Confirm Password" />
                            </div>
                            <TextInput type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </div>
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