'use client';

import Link from "next/link"
import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Label,
    TextInput,
    Select,
    Textarea,
    FileInput,
} from "flowbite-react";
import { HiHome, HiArrowSmLeft, HiOutlineSave } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { updateProduct, getProductById } from "../../../api/products";
import { getAllCategories } from "../../../api/categories";

export default function EditProduct() {
    const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
    const [form, setForm] = useState<{
        name: string,
        description: string,
        price: string,
        categoryId: string,
        whatsApp: string,
        image: string,
    }>({
        name: "",
        description: "",
        price: "",
        categoryId: "",
        whatsApp: "",
        image: ""
    });

    const router = useRouter();
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            const product = await getProductById(Number(id));
            if (product) {
                setForm({
                    name: product.name,
                    description: product.description,
                    price: product.price.toString(),
                    categoryId: product.categoryId.toString(),
                    whatsApp: product.whatsApp,
                    image: product.image
                });
            }
        };

        const fetchCategories = async () => {
            const data = await getAllCategories();
            setCategories(data);
        };

        fetchProduct();
        fetchCategories();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const data = {
            id,
            name: form.name,
            description: form.description,
            price: parseInt(form.price),
            categoryId: parseInt(form.categoryId, 10),
            whatsApp: form.whatsApp,
        };

        await updateProduct(Number(id), data);
        router.push('/panel/products');
    };

    return (
        <div>
            <Breadcrumb aria-label="Default breadcrumb example" className="mt-5 mb-5">
                <BreadcrumbItem href="/panel" icon={HiHome}>
                    <Link href="/panel">
                        Dashboard
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem href="/panel/products">
                    <Link href="/panel/products">
                        Products
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>Edit Product</BreadcrumbItem>
            </Breadcrumb>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium">Edit Product</h2>
                <Button as={Link} href="/panel/products" color="blue">
                    <HiArrowSmLeft className="mr-2 h-5 w-5" />
                    Back
                </Button>
            </div>
            <div className="grid grid-cols-12 gap-6 pb-10">
                <div className="col-span-8">
                    <div className="shadow p-5 rounded">
                        <form onSubmit={handleSubmit} id="form-product">
                            <div className="mb-3">
                                <div className="mb-2 block">
                                    <Label value="Product Name" />
                                </div>
                                <TextInput name="name" type="text" value={form.name} onChange={handleChange} required />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="mb-3">
                                    <div className="mb-2 block">
                                        <Label value="Category" />
                                    </div>
                                    <Select name="categoryId" value={form.categoryId} onChange={(e) => setForm({ ...form, categoryId: e.target.value })} required>
                                        <option value="">Select category</option>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>{category.name}</option>
                                        ))}
                                    </Select>
                                </div>
                                <div className="mb-3">
                                    <div className="mb-2 block">
                                        <Label value="Price" />
                                    </div>
                                    <TextInput name="price" type="number" addon="Rp" value={form.price} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <div className="mb-2 block">
                                        <Label value="WhatsApp" />
                                    </div>
                                    <TextInput name="whatsApp" type="number" addon="+62" value={form.whatsApp} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="mb-2 block">
                                    <Label value="Description" />
                                </div>
                                <Textarea name="description" required rows={4} value={form.description} onChange={handleChange} />
                            </div>
                            <Button type="submit" color="blue">
                                <HiOutlineSave className="mr-2 h-5 w-5" />
                                Save
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="shadow p-5 rounded">
                        <img src={`/${form.image}`} alt="" className="w-full"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
