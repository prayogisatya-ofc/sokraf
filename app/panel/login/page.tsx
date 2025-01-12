'use client';

import React, { useEffect, useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated") {
            router.push('/panel');
        }
    }, [session, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password
            });
    
            if (result?.error) {
                alert(result.error);
            } else {
                router.push('/panel');
            }
        } catch (error) {
            alert("An error occurred during login");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center px-4 mx-auto h-screen">
            <Link href="/panel" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src="/logo.svg" alt="logo"/>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">So<span className="text-primary-700">kraf</span> Panel</span>
            </Link>
            <div className="w-full bg-white rounded-lg shadow-md p-7 sm:max-w-md">
                <h1 className="text-xl font-semibold leading-tight tracking-tight md:text-2xl mb-5">
                    Sign in to panel
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div>
                        <div className="mb-2 block">
                            <Label value="Your email" />
                        </div>
                        <TextInput type="email" placeholder="jhondoe@sokraf.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label value="Your password" />
                        </div>
                        <TextInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='••••••' required />
                    </div>
                    <Button type="submit" className="w-full" color="blue">Submit</Button>
                </form>
            </div>
        </div>
    )
};