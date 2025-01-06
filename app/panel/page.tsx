'use client';

export default function Dashboard() {
    return (
        <div>
            <div className="text-center flex items-center flex-col mt-5 mb-10">
                <img src="/logo.svg" className="h-12 mb-3" alt="Sokraf Logo" />
                <h3 className="text-lg font-medium mb-3">Welcome, Aspita Fitri</h3>
                <h1 className="text-5xl font-bold">SO<span className="text-primary-700">KRAF</span> PANEL</h1>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <div className="sm:col-span-1 col-span-3 p-4 rounded shadow">
                    <div className="text-2xl font-semibold mb-2">10</div>
                    <p className="mb-0 text-sm">Total Products</p>
                </div>
                <div className="sm:col-span-1 col-span-3 p-4 rounded shadow">
                    <div className="text-2xl font-semibold mb-2">5</div>
                    <p className="mb-0 text-sm">Total Categories</p>
                </div>
                <div className="sm:col-span-1 col-span-3 p-4 rounded shadow">
                    <div className="text-2xl font-semibold mb-2">15</div>
                    <p className="mb-0 text-sm">Total Admins</p>
                </div>
            </div>
        </div>
    )
};